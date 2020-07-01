let Inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
  return fruit.name === 'cherries';
}

let oneDataOnArray = Inventory.filter((e) => e.name === 'apples')[0];
console.log(oneDataOnArray); // { name: 'apples', quantity: 2 } 

/******** Some how problem in .find() **********/
//console.log(Inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
//console.log(Inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
