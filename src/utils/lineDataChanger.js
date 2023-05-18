function lineDataChanger(data) {
  const result = [];
  data.forEach((e) => result.push(graphValueToLine(e)));

  return result;
}

function graphValueToLine({ dataNum, task, values }) {
  const data = [];
  for (let i = 0; i < dataNum; i++) data.push({ x: "core" + (i + 1), y: Number(values[i]) });

  return { id: task, data: data };
}

export default lineDataChanger;
