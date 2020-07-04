# Section 3.13: Void

If you have no type at all, commonly used for functions that do not 
return anything:

```ts
function log(): void {
  console.log('I return nothing');
}

log(); // I return nothing

// void types Can only be assigned null or undefined .
```