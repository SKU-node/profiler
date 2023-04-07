const barData = [
  { bottle: "365ml", cola: 1200, cidar: 1000, fanta: 1100 },
  { bottle: "500ml", cola: 2200, cidar: 2000, fanta: 2100 },
  { bottle: "1000ml", cola: 3200, cidar: 3000, fanta: 3100 },
];

const lineData = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 100,
      },
      {
        x: "helicopter",
        y: 20,
      },
      {
        x: "boat",
        y: 41,
      },
      {
        x: "train",
        y: 177,
      },
      {
        x: "subway",
        y: 268,
      },
      {
        x: "bus",
        y: 146,
      },
      {
        x: "car",
        y: 244,
      },
      {
        x: "moto",
        y: 181,
      },
      {
        x: "bicycle",
        y: 295,
      },
      {
        x: "horse",
        y: 45,
      },
      {
        x: "skateboard",
        y: 29,
      },
      {
        x: "others",
        y: 118,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(15, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 220,
      },
      {
        x: "helicopter",
        y: 188,
      },
      {
        x: "boat",
        y: 264,
      },
      {
        x: "train",
        y: 43,
      },
      {
        x: "subway",
        y: 124,
      },
      {
        x: "bus",
        y: 157,
      },
      {
        x: "car",
        y: 143,
      },
      {
        x: "moto",
        y: 204,
      },
      {
        x: "bicycle",
        y: 248,
      },
      {
        x: "horse",
        y: 60,
      },
      {
        x: "skateboard",
        y: 31,
      },
      {
        x: "others",
        y: 53,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(144, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 79,
      },
      {
        x: "helicopter",
        y: 35,
      },
      {
        x: "boat",
        y: 197,
      },
      {
        x: "train",
        y: 285,
      },
      {
        x: "subway",
        y: 95,
      },
      {
        x: "bus",
        y: 290,
      },
      {
        x: "car",
        y: 135,
      },
      {
        x: "moto",
        y: 253,
      },
      {
        x: "bicycle",
        y: 130,
      },
      {
        x: "horse",
        y: 257,
      },
      {
        x: "skateboard",
        y: 200,
      },
      {
        x: "others",
        y: 122,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(50, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 164,
      },
      {
        x: "helicopter",
        y: 33,
      },
      {
        x: "boat",
        y: 101,
      },
      {
        x: "train",
        y: 120,
      },
      {
        x: "subway",
        y: 257,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 15,
      },
      {
        x: "moto",
        y: 62,
      },
      {
        x: "bicycle",
        y: 73,
      },
      {
        x: "horse",
        y: 281,
      },
      {
        x: "skateboard",
        y: 182,
      },
      {
        x: "others",
        y: 192,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(244, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 68,
      },
      {
        x: "helicopter",
        y: 202,
      },
      {
        x: "boat",
        y: 211,
      },
      {
        x: "train",
        y: 160,
      },
      {
        x: "subway",
        y: 277,
      },
      {
        x: "bus",
        y: 251,
      },
      {
        x: "car",
        y: 37,
      },
      {
        x: "moto",
        y: 255,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 294,
      },
      {
        x: "skateboard",
        y: 83,
      },
      {
        x: "others",
        y: 65,
      },
    ],
  },
];

const keys = ["cola", "cidar", "fanta"];

const style = {
  margin: { top: 50, right: 50, bottom: 50, left: 50 },
  colors: ["olive", "brown", "orange"],
  padding: 0.3,
};

export { lineData, barData, keys, style };
