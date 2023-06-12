import { GraphValue } from "./classes";

/**
 * @tasks  tasks 에 해당하는 arr
 * @numbers numbers 에 해당하는 arr
 * @cores cores 에 해당하는 arr
 */
function graphMaker(tasks, numbers, cores) {
  // 그래프 하나에 해당하는 tasks, numbers, core를 전달받아 데이터 정제하는 함수

  const graph = []; // 결과값 ( 리턴값 )
  const taskLeng = tasks.length; // task 에 shift 를 쓰므로, lenth 값은 유동적으로 변하기에, 고정
  const coreLeng = cores.length; // core length, 즉 코어 갯수를 말한다.

  for (let j = 0; j < taskLeng; j++) {
    const number = []; // 임시 메모리
    for (let i = 0; i < coreLeng; i++) {
      const t = j + i * coreLeng; // 태스크 의 코어 별 점수를 할당
      const v = numbers.slice(t, t + 1);
      number.push(...v);
    }
    graph.push(new GraphValue(tasks.shift(), number));
    // 태스크와 태스크테 해당하는 점수들 할당하여 생성된 GraphValue 를 결과값에 push
  }

  return graph;
}

/**
 * @input  input.txt 에 해당하는 string
 */
function dataChanger(input) {
  const tasks = []; // 큐
  const cores = []; // 큐
  const numbers = []; // 큐
  const arr = input.replaceAll(/[\t\n]/g, "&").split("&");
  const result = [];
  let flag = 0; // 0 이면 task, 1 이면 core, number

  arr.forEach((e, i) => {
    if (/task/.test(e)) {
      if (flag === 0) tasks.push(e); // 아직 그래프를 전부 읽지 못한 경우,
      else {
        // 그래프 하나에 해당하는 데이터 를 전부 읽고, 다음 그래프에 도달한 경우
        result.push(graphMaker(tasks, numbers, cores));
        cores.splice(0); // 데이터를 사용하였으므로 초기화
        tasks.push(e); // 데이터를 사용하였으므로 초기화
        numbers.splice(0); // 데이터를 사용하였으므로 초기화
        flag = 0; // 플래그 초기화
      }
    } else if (/core/.test(e)) {
      cores.push(e); //
      flag = 1;
    } else if (/[0-9]/.test(e)) numbers.push(e);

    if (i === arr.length - 1) result.push(graphMaker(tasks, numbers, cores)); // 마지막 그래프를 전부 읽은 경우
  });

  return result;
}

export default dataChanger;
