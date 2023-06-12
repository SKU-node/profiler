function RadarDataChanger(data) {
  let maxNum = 0;
  const Tasks = [];
  const keys = [];

  data.forEach((e) => {
    maxNum = maxNum < e.dataNum ? e.dataNum : maxNum;
    const task = { task: e.task };
    for (let i = 1; i <= e.dataNum; i++) task["core" + i] = e.values[i - 1];
    Tasks.push(task);
  });

  for (let i = 1; i <= maxNum; i++) keys.push("core" + i);

  return { Tasks: Tasks, keys: keys };
}

export default RadarDataChanger;
