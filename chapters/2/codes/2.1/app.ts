/*

If you find the arguments for type systems persuasive in general, then you'll be happy with TypeScript.
It brings many of the advantages of type system (safety, readability, improved tooling) to the 
JavaScript ecosystem. It also suffers from some of the drawbacks of type systems (added complexity 
and incompleteness).

*/

function double(num: number): number {
  return num * 5;
}

/*
console.log(double('6')); 

myTs.ts:5:20 - error TS2345: Argument of type '"6"' is not assignable 
to parameter of type 'number'.
*/

console.log(double(6)); // 30