// Array type with known and possibly different types:

let day: [number, string];
day = [0, 'Monday']; 
console.log(day) // valid [ 0, 'Monday' ]
/*
day = ['zero', 'Monday']; // invalid: 'zero' is not numeric
Type 'string' is not assignable to type 'number'.ts(2322)
*/

console.log(day[0]); // 0
console.log(day[1]); // Monday

day[1] = 'Saturday'; // valid: [ 0, 'Saturday' ]
/*

day[2] = 'Sunday'; 
// Tuple type '[number, string]' of length '2' has no element at index '2'.

day[3] = false; 
// invalid: must be union type of 'number | string'

*/
console.log(day)