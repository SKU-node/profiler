import { css } from "styled-components";
import InterBold from "./Inter-ExtraBold.ttf";

const fonts = css`
  @font-face {
    font-family: "InterBold";
    src: url(${InterBold}) format("truetype");
  }
`;
export default fonts;
