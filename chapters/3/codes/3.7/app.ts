/*

A const Enum is the same as a normal Enum. Except that no Object is generated at 
compile time. Instead, the literal values are substituted where the const Enum is 
used.
// TypeScript: A const Enum can be defined like a normal Enum (with start value, 
specific values, etc.)

*/

const enum NinjaActivity {
  Espionage,
  Sabotage,
  Assassination
}

// TypeScript: Except if you use it
let myFavoriteNinjaActivity = NinjaActivity.Espionage;
console.log(myFavoriteNinjaActivity); // 0

// TypeScript: The same for the other constant example
console.log(NinjaActivity["Sabotage"]); // 1

// TypeScript: A normal Enum
enum PirateActivity {
  Boarding,
  Drinking,
  Fencing
}

// TypeScript: A normal use of this Enum
let myFavoritePirateActivity = PirateActivity.Boarding;
console.log(myFavoritePirateActivity); // 0

// TypeScript: And some other normal use
console.log(PirateActivity["Drinking"]); // 1

// TypeScript: At runtime, you can access an normal enum
console.log(PirateActivity[myFavoritePirateActivity]); // "Boarding"
