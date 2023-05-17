function barDataChanger(data) {
  const result = [];
  const a = data.value[0];
  a.forEach((e) => result.push(graphValueToBar(e)));

  return result;
}

function graphValueToBar({ dataNum, task, values }) {
  const result = { title: task, values: [] };

  for (let i = 0; i < dataNum; i++) {
    const obj = {};
    obj["core" + (i + 1)] = values[i];
    result.values.push(obj);
  }

  return result;
}

export default barDataChanger;
