import * as React from "react";
import { ResponsiveLine } from "@nivo/line";

function LineChart({ lineData }) {
  const style = {
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
    colors: ["orange"],
    padding: 0.3,
  };

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

export default LineChart;
