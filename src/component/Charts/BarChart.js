import * as React from "react";
import { ResponsiveBar } from "@nivo/bar";

function Barchart({ barData }) {
  const keys = ["performance"];

  const style = {
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
    colors: ["orange"],
    padding: 0.3,
  };

  return (
    <ResponsiveBar
      data={barData.values}
      keys={keys}
      indexBy="name"
      margin={style.margin}
      colors={style.colors}
      padding={style.padding}
    />
  );
}

export default Barchart;
