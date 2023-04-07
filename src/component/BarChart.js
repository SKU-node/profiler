import * as React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { barData, keys, style } from "./chartdata";

function Barchart() {
  return (
    <div style={{ width: "800px", height: "500px", margin: "0 auto" }}>
      <ResponsiveBar
        data={barData}
        keys={keys}
        indexBy="bottle"
        margin={style.margin}
        colors={style.colors}
        padding={style.padding}
      />
    </div>
  );
}

export default Barchart;
