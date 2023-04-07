import * as React from "react";
import { ResponsiveLine } from "@nivo/line";
import { lineData, style } from "./chartdata";

function LineChart() {
  return (
    <div style={{ width: "800px", height: "500px", margin: "0 auto" }}>
      <ResponsiveLine
        data={lineData}
        margin={style.margin}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
        }}
      />
    </div>
  );
}

export { LineChart };
