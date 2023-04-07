import styled from "styled-components";
import GraphCard from "../component/GraphCard";
import Container from "../component/Container";

const dummy = [undefined, { title: "hey" }, { title: "hey" }, { title: "hey" }, { title: "hey" }];
const Body = styled(Container)`
  margin-top: 2vh;
  flex-wrap: wrap;
`;

function Main() {
  return (
    <Body>
      {dummy.map((v, i) => (
        <GraphCard key={i} data={v} />
      ))}
    </Body>
  );
}

export default Main;
