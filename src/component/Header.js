import styled from "styled-components";
import Typo from "./Typo";
import Container from "./Container";
import { useLocation, useNavigate } from "react-router-dom";

const UnderLiner = styled.div`
  border-bottom: 4px solid black;
  width: 90%;
`;

const TitleContainer = styled(Container)`
  margin: 2% 0 0 5%;
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
    const place = e.target.innerHTML.replace(" /", "");
    const idx = loc.length - e.target.id - 1;
    let http = "";
    for (let i = 0; i < idx; i++) http += "../";
    nav(http + place + "/");
  };

  return (
    <TitleContainer dir="column">
      <UnderLiner>
        <Typo size="50px">PF STALKER</Typo>
      </UnderLiner>
      <Container dir="row">
        {loc.map((v, i) => (
          <Menu onClick={onMenuClick} id={i} key={i}>
            {v} /
          </Menu>
        ))}
      </Container>
    </TitleContainer>
  );
}

export default Header;
