/*
When you create a function in TypeScript you can specify the data type of the function's 
arguments and the data type for the return value
Example:
*/

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

/*
Here the syntax num1: number, num2: number means that the function can accept two arguments 
num1 and num2 and they can only be numbers and (...): number { means that the return value can 
only be a number
Usage:
*/

console.log(sum(70, 80)); // will be return 160

// You can not do so

/*
function sum(x: string, y: string): number {
  return x + y;
}
TSError: ⨯ Unable to compile TypeScript:
- error TS2322: Type 'string' is not assignable to type 'number'.



function sum(x: number, y: number): string {
  return x + y;
}
TSError: ⨯ Unable to compile TypeScript:
- error TS2322: Type 'number' is not assignable to type 'string'.

*/