import { ResponsiveRadar } from "@nivo/radar";

function RadarChart({ radarData }) {
  const { Tasks, keys } = radarData;

  return (
    <ResponsiveRadar
      data={Tasks}
      keys={keys}
      indexBy="task"
      valueFormat=">-.2f"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={36}
      colors={{ scheme: "nivo" }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
}
export default RadarChart;
