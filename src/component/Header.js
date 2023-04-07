import styled from "styled-components";
import Typo from "./Typo";
import Container from "./Container";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CLink from "./CLink";
import { useEffect } from "react";

const UnderLiner = styled.div`
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
