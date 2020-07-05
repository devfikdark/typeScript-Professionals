# Section 6.3: Functions with Union Types

### A TypeScript function can take in parameters of multiple, predefined types using union types.
```ts
function whatTime(hour:number|string, minute:number|string):string{
  return hour+':'+minute;
}

whatTime(1,30) //'1:30'
whatTime('1',30) //'1:30'
whatTime(1,'30') //'1:30'
whatTime('1','30') //'1:30'
```

TypeScript treats these parameters as a single type that is a union of the other types, so your function must be able to handle parameters of any type that is in the union.
```ts
function addTen(start:number|string):number{
  if(typeof number === 'string'){
    return parseInt(number)+10;
  }else{
    else return number+10;
  }
}
```