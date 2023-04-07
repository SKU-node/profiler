import styled from "styled-components";
import fonts from "../assets/fonts/fonts";

const TextBox = styled.input`
  ${fonts}
  border: 0;
  background-color: #eeeeee;
  border-radius: 10px;
  width: 40vw;
  height: 5vh;
  font-family: InterBold;
  font-size: 24px;
  padding-left: 1vw;

  ::placeholder {
    color: #9e9e9e;
    font-family: InterBold;
  }
`;

export default TextBox;
