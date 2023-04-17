docker-compose up 으로써 사용 가능

## graph data form

```ts
class Graph {
  constructor(id: string, values: number[]) {
    this.id = id;
    this.dataNum = values.length;
    this.values = values;
  }
}
```
