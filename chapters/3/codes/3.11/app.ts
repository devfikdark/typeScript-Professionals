// A type to name a set of numeric values:
// Number values default to 0:
enum Day { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };
let bestDay: Day = Day.Saturday;
console.log(Day);
/*
{ 
  '0': 'Monday',
  '1': 'Tuesday',
  '2': 'Wednesday',
  '3': 'Thursday',
  '4': 'Friday',
  '5': 'Saturday',
  '6': 'Sunday',
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6 
}

*/
console.log(bestDay); // 5

//Set a default starting number:
enum TenPlus { Ten = 10, Eleven, Twelve }
console.log(TenPlus);
/*
{ 
  '10': 'Ten',
  '11': 'Eleven',
  '12': 'Twelve',
  Ten: 10,
  Eleven: 11,
  Twelve: 12 
}

*/
//or assign values:
enum MyOddSet { Three = 3, Five = 5, Seven = 7, Nine = 9 }
console.log(MyOddSet);
/*
{ 
  '3': 'Three',
  '5': 'Five',
  '7': 'Seven',
  '9': 'Nine',
  Three: 3,
  Five: 5,
  Seven: 7,
  Nine: 9 
}

*/