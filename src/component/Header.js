import styled from "styled-components";
import Typo from "./Typo";
import Container from "./Container";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const UnderLiner = styled.div`
  border-bottom: 4px solid black;
  width: 90%;
`;

const TitleContainer = styled(Container)`
  margin: 2% 0 0 5%;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Menu = styled(Typo)`
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

  return (
    <TitleContainer dir="column">
      <UnderLiner>
        <TitleLink to="/main">
          <Typo size="50px">PF STALKER</Typo>
        </TitleLink>
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
