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
console.log(createObj);
console.log(createObj.getData());