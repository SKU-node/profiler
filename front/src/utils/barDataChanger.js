function barDataChanger(data) {
  const result = [];
  data.forEach((e) => result.push(graphValueToBar(e)));

  return result;
}

function graphValueToBar({ dataNum, task, values }) {
  const result = { title: task, values: [] };

  for (let i = 0; i < dataNum; i++) {
    const obj = {};
    obj.name = "core" + (i + 1);
    obj.performance = Number(values[i]);
    result.values.push(obj);
  }

  return result;
}

export default barDataChanger;
