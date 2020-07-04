# Section 3.3: Boolean

A boolean represents the most basic datatype in TypeScript, with the purpose of 
assigning true/false values.

```ts
// set with initial value (either true or false)
let isTrue: boolean = true;
console.log(isTrue); // true

// defaults to 'undefined', when not explicitly set
let unsetBool: boolean;
console.log(unsetBool); // undefined

// can also be set to 'null' as well
let nullableBool: boolean = null;
console.log(nullableBool); // null
```