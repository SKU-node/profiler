import styled from "styled-components";
import fonts from "../assets/fonts/fonts";

const Typo = styled.p`
  ${fonts}
  font-family: InterBold;
  font-size: ${(props) => props.size || "14px"};
`;

export default Typo;
