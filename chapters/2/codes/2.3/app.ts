/*

TypeScript allows editors to perform automated refactors which are aware of the rules 
of the languages.

*/

let ans = 'morol';
{
  let ans = (num: number) => {
    return 5 * num;
  }

  //console.log(ans); // [Function: ans_1]
  console.log(ans(10)) // 50
}

console.log(ans); // morol

/*
Here, for instance, Visual Studio Code is able to rename references to the inner ans without 
altering the outer ans. This would be difficult to do with a simple find/replace.
*/