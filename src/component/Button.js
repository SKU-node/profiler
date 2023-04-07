import styled from "styled-components";
import fonts from "../assets/fonts/fonts";

const Body = styled.div`
  ${fonts}
  width: 80px;
  height: 40px;
  background-color: #4182be;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: interBold;

  &:hover {
    filter: invert(20%);
  }
  &:active {
    filter: invert(20%);
  }
  &:visited {
    filter: invert(20%);
  }
`;

function Button({ value }) {
  return <Body>{value}</Body>;
}

export default Button;
