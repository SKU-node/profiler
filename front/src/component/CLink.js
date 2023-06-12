import { Link } from "react-router-dom";
import styled from "styled-components";

const CLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: ${(props) => props.margin};
`;

export default CLink;
