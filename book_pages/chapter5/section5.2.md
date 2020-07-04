# Section 5.2: How to get all enum values

```ts
enum SomeEnum { A, B };

console.log(SomeEnum); // { '0': 'A', '1': 'B', A: 0, B: 1 }

let enumValues:Array<string> = [];
for(let value in SomeEnum) {
  if(typeof SomeEnum[value] === 'number') {
    enumValues.push(value);
  }
}

console.log(enumValues); // [ 'A', 'B' ]

enumValues.forEach(v=> console.log(v));
/*
A
B
*/
```