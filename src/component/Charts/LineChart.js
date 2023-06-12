import * as React from "react";
import { ResponsiveLine } from "@nivo/line";

function LineChart({ lineData }) {
  const bottom = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "cores",
    legendOffset: 36,
    legendPosition: "middle",
  };

  const left = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "performance",
    legendOffset: -40,
    legendPosition: "middle",
  };

  const legend = [
    {
      anchor: "bottom-right",
      direction: "column",
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: "left-to-right",
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: "circle",
      symbolBorderColor: "rgba(0, 0, 0, .5)",
      effects: [
        {
          on: "hover",
          style: {
            itemBackground: "rgba(0, 0, 0, .03)",
            itemOpacity: 1,
          },
        },
      ],
    },
  ];

  return (
    <div style={{ width: "800px", height: "500px", margin: "0 auto" }}>
      <ResponsiveLine
        data={lineData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={bottom}
        axisLeft={left}
        useMesh={true}
        legends={legend}
      />
    </div>
  );
}

export default LineChart;
