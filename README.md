docker-compose up 으로써 사용 가능

## graph data form

```ts
class GraphValue {
  constructor(task: string, values: number[]) {
    this.task = task;
    this.dataNum = values.length;
    this.values = values;
  }
}
```
