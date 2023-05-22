import styled from "styled-components";
import GraphCard from "../component/GraphCard";
import Container from "../component/Container";
import { useSelector } from "react-redux";
import Button from '../component/Button';
import { useNavigate } from "react-router-dom";


const Body = styled(Container)`
  margin-top: 2vh;
  flex-wrap: wrap;
`;

function Main() {
  const nav=useNavigate();

  const loginClicked=()=>{
    nav('/Login');
  }
  const registerClicked=()=>{
    nav('/RegisterUsers');
  }
  const graph = useSelector((state) => state.graph.data);
  return (
    <Body dir="column">
      <Body>
        <Button value="로그인" onClick={loginClicked}></Button>
        <Button value="회원가입" onClick={registerClicked}></Button>
      </Body>
      {[undefined, ...graph].map((v, i) => (
        <GraphCard key={i} data={v} index={i} />
      ))}
    </Body>
  );
}

export default Main;
