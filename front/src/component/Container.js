import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir || "row"};
  margin: ${(props) => props.margin};
  flex-shrink: 0;
`;

export default Container;
