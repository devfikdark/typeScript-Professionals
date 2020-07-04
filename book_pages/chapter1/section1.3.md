# Section 1.3: Hello World

```ts
class myContainer {
  public myStr: string;
  constructor(message: string) {
    this.myStr = message;
  }
  getData(): string {
    return this.myStr;
  }
};

let createObj = new myContainer("Hi Morol!");
console.log(createObj.getData());
```