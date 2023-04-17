function dataChanger(str) {
  const cookie = str;         // file.file값 cookie에 대입
  let num = 0;                
  const arr1 = cookie.split('\n');    // arr1에 \n으로 구분된 배열 생성
  const arr2 = [];                   
  
  // arr1의 각 요소에 앞뒤 공백을 없앤 후 모든 공백을 공백 한칸으로 변경 후 arr2에 대입
  for (let i = 0; i < arr1.length; i++) {
      arr2.push(arr1[i].trim().replace(/\s+/g," "));
  }

  // 수행 결과가 \n으로 구분돼서 측정 값 사이에 ''를 요소로 갖는 인덱스가 생성돼
  // '' 전 까지의 인덱스 수를 num에 저장, num은 표 하나의 길이
  while(arr2[num] != '')
  {
      num++;
  }
  
  //core 수는 task줄을 제외한 num-1이 되고 Task 수는 첫 인덱스를 공백으로 구분한 배열의 길이가 됨
  let CoreNum = num-1;
  let TaskNum = arr2[0].split(" ").length;
  
  // ''가 요소인 인덱스를 제외해 arr3에 대입
  const arr3 = arr2.filter(word => word != '' );
  
  // TaskId는 0인덱스의 공백을 제외하여 생성한 배열의 각 인덱스의 요소가 됨
  let TaskId = arr3[0].split(" ");
 
  // CoreId는 1~CoreNum까지의 인덱스를 공백을 제외한 배열로 생성시 0번째 인덱스 요소가 됨
  let CoreId = [];
  for(let i = 1; i <= CoreNum; i++){
      CoreId.push(arr3[i].split(" ")[0]);
  }
  
  // Values는 측정 값, 코어가 속한 인덱스에서 CoreId가 있는 0번째 인덱스를 제외한 1~TaskNnum까지의 값이 된다
  let Values = [];
  for(let i = 1; arr3[i] != null; i += CoreNum+1) {
      let arr4 = []
      for(let j = 0; j<CoreNum; j++){
          let arr5 = arr3[i+j].split(" ").splice(1,TaskNum);
          arr4.push(arr5);
      }
      Values.push(arr4);
  }
  
  let Data = [];

  // DataNum은 수행횟수를 구분한 값 InputFile은 10번의 측정을 하였고 몇번째 측정인지를 알기 위해 추가 
  let DataNum = 0;
  let a = 0;
  while(arr3[a] != null){
      a += num;
      DataNum++;
  }

  //각 배열에 TaskId와 CoreId에 대응되는 측정값과 몇번 째 측정값인지를 추가해서 data배열에 추가
  for(let i=0; i < DataNum; i++){
      const arr6 = [];
      for(let j = 0; j < TaskNum; j++){
          let Dict1 = {"Id" : TaskId[j]};
          Dict1["DataNum"] = i;
          const arr7 = [];
          for(let k = 0; k < CoreNum; k++){
              let Dict2 = {}
              Dict2[CoreId[k]] = Values[i][j][k];
              arr7.push(Dict2);
          }
          Dict1['Values'] = arr7;
          arr6.push(Dict1);
      }
      Data.push(arr6);
  }

  return Data;
}

export default dataChanger;