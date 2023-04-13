function dataChanger(str) {
    const cookie = str;
    let num = 0;
    let arr1 = cookie.split('\n');
    let arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i].trim().replace(/\s+/g," "));
    }
    while(arr2[num] != '')
    {
        num++;
    }
    
    let CoreNum = num-1;
    let TaskNum = arr2[0].split(" ").length;
    
    let arr3 = arr2.filter(word => word != '' );
    
    let TaskId = arr3[0].split(" ");
    
    let CoreId = [];
    for(let i = 1; i <= CoreNum; i++){
        CoreId.push(arr3[i].split(" ")[0]);
    }
    
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
    let DataNum = 0;
    let a = 0;
    while(arr3[a] != null){
        a += num;
        DataNum++;
    }
    
    for(let i=0; i < DataNum; i++){
        let arr6 = [];
        for(let j = 0; j < TaskNum; j++){
            let Dict1 = {"Id" : TaskId[j]};
            Dict1["DataNum"] = i;
            let arr7 = [];
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
