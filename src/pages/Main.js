import styled from "styled-components";
import GraphCard from "../component/GraphCard";
import Container from "../component/Container";
import { useSelector } from "react-redux";

const Body = styled(Container)`
  margin-top: 2vh;
  flex-wrap: wrap;
`;

function Main() {
  const graph = useSelector((state) => state.graph.data);
  return (
    <Body>
      {[undefined, ...graph].map((v, i) => (
        <GraphCard key={i} data={v} index={i} />
      ))}
    </Body>
  );
}

export default Main;
