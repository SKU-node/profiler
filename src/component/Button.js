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
  margin: ${(props) => props.margin};

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

function Button({ onClick, margin, value }) {
  return (
    <Body onClick={onClick} margin={margin}>
      {value}
    </Body>
  );
}

export default Button;
