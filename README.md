## 사용법

docker-compose up 으로써 사용 가능

## Clas Graph

```ts
class Graph {
  constructor(name: string, values: number[]) {
    this.name = task;
    this.image = image;
    this.created_at = new Date().now();
    this.updated_at = new Date().now();
  }
}

class GraphValue {
  constructor(task: string, values: number[]) {
    this.task = task;
    this.dataNum = values.length;
    this.values = values;
  }
}
```

## Class LineGraph

```ts
class LineDataObject {
  constructor(core, value) {
    this.x = core;
    this.y = value;
  }
}

class LineData {
  constructor(objName: string, values: LineDataObject[]) {
    this.id = objName;
    this.data = values;
  }
}
```

## Class BarData

```ts
class BarDataObject {
  constructor(coreNum: number, value: number) {
    this.core = "core" + coreNum;
    this.value = value;
  }
}

class BarData {
  constructor(data: BarDataObject[]) {
    this.data = data;
  }
}
```

## Class File

```ts
class File {
  constructor(fileName: string, graphs: Graph) {
    this.fileNmae = fileName;
    this.graphs = graphs;
    this.created_at = Date().now();
    this.updated_at = Date().now();
  }
}
```
