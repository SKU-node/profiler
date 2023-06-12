import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Typo from "./Typo";
import Container from "./Container";
import CLink from "./CLink";
import userSlice from "../store/userSlice";

const UnderLiner = styled.div`
  display: flex;
  border-bottom: 4px solid black;
  width: 90%;
`;

const TitleContainer = styled(Container)`
  margin: 2% 0 0 5%;
`;

const HTypo = styled(Typo)`
  margin: 10px;
  margin-left: 0px;
`;

const Menu = styled(HTypo)`
  margin-right: 1%;
  font-size: 30px;
  cursor: pointer;
`;

const UserMenuBody = styled(Container)`
  margin: 0 0 0 auto;
`;

function UserMenu() {
  const id = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
  }, [id]);

  const onLogOut = () => {
    dispatch(userSlice.actions.setUser(""));
  };

  if (id)
    return (
      <UserMenuBody onClick={onLogOut}>
        <CLink margin="2.4vh 0 0 auto">
          <HTypo size="20px">LOGOUT</HTypo>
        </CLink>
      </UserMenuBody>
    );
  else
    return (
      <UserMenuBody>
        <CLink to="/login" margin="2.4vh 0 0 auto">
          <HTypo size="20px">LOGIN</HTypo>
        </CLink>
        <CLink to="/signup" margin="2.4vh 0 0 2vw">
          <HTypo size="20px">SIGN UP</HTypo>
        </CLink>
      </UserMenuBody>
    );
}

function Header() {
  const nav = useNavigate();
  const loc = useLocation().pathname.split("/");
  loc.shift();

  const onMenuClick = (e) => {
    const idx = loc.length - e.target.id - 1;
    let http = loc.splice(0, loc.length - idx).join("/");
    nav(http);
  };

  useEffect(() => {
    if ([...loc].pop() === "") nav("main");
  }, []);

  return (
    <TitleContainer dir="column">
      <UnderLiner>
        <CLink to="/main">
          <HTypo size="50px">PF STALKER</HTypo>
        </CLink>
        <UserMenu />
      </UnderLiner>
      <Container dir="row">
        {loc.map((v, i) => (
          <Menu onClick={onMenuClick} key={i}>
            {i === 0 ? v : "/ " + v}
          </Menu>
        ))}
      </Container>
      <Outlet />
    </TitleContainer>
  );
}

export default Header;
