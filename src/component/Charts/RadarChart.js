import { ResponsiveRadar } from "@nivo/radar";

[
  {
    taste: "fruity",
    chardonay: 74,
    carmenere: 29,
    syrah: 119,
  },
  {
    taste: "bitter",
    chardonay: 73,
    carmenere: 28,
    syrah: 75,
  },
  {
    taste: "heavy",
    chardonay: 74,
    carmenere: 68,
    syrah: 23,
  },
  {
    taste: "strong",
    chardonay: 63,
    carmenere: 103,
    syrah: 65,
  },
  {
    taste: "sunny",
    chardonay: 73,
    carmenere: 102,
    syrah: 95,
  },
];

const RadarChart = ({ radarData }) => (
  <ResponsiveRadar
    data={radarData}
    keys={["chardonay", "carmenere", "syrah"]}
    indexBy="taste"
    valueFormat=">-.2f"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    borderColor={{ from: "color" }}
    gridLabelOffset={36}
    dotSize={10}
    dotColor={{ theme: "background" }}
    dotBorderWidth={2}
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

export default RadarChart;
