# Section 3.12: Any

### When unsure of a type, any is available:

```ts
let anything: any = 'I am a string';
console.log(anything); // I am a string

anything = 5; // but now I am the number 5
console.log(anything); // 5
```