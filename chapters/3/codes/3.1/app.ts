/*
String literal types allow you to specify the exact value a string can have.
*/

let myFavoritePet: "dog";
// console.log(myFavoritePet); // undefined

/*
myFavoritePet = "rock";
console.log(myFavoritePet); 
// Error: Type '"rock"' is not assignable to type '"dog"'.
*/

myFavoritePet = "dog";
//console.log(myFavoritePet); // dog

// Together with Type Aliases and Union Types you get a enum-like behavior.
type Species = "cat" | "dog" | "bird";

// They works well for User-Defined Type Guards.
interface Pet {
  species: Species;
  name: String;
  eat();
  sleep();
}

interface Cat extends Pet {
  species: "cat";
}

interface Dog extends Pet {
  species: "dog";
  walk();
}

interface Bird extends Pet {
  species: "bird";
  sing();
}

/*
Error: Interface 'Rock' incorrectly extends interface 'Pet'. Types of property 'species' are
incompatible. Type '"rock"' is not assignable to type '"cat" | "dog" | "bird"'. Type '"rock"' is not
assignable to type '"bird"'.
interface Rock extends Pet {
  type: "rock";
}
*/

// String Literal Types can be used to distinguish overloads.

function buyPet(pet :Species, name: String) : Pet;
function buyPet(pet :"cat", name: String) : Cat;
function buyPet(pet :"dog", name: String) : Dog;
function buyPet(pet :"bird", name: String) : Bird;
function buyPet(pet :Species, name: String) : Pet {
  if(pet === "cat") {
    return {
      species: "cat",
      name: name,
      eat: function () {
        console.log(`${this.name} eats.`);
      }, 
      walk: function () {
        console.log(`${this.name} walks.`);
      }, 
      sleep: function () {
        console.log(`${this.name} sleeps.`);
      }
    } as Cat;
  } else if(pet === "dog") {
    return {
      species: "dog",
      name: name,
      eat: function () {
        console.log(`${this.name} eats.`);
      }, 
      walk: function () {
        console.log(`${this.name} walks.`);
      }, 
      sleep: function () {
        console.log(`${this.name} sleeps.`);
      }
    } as Dog;
  } else if(pet === "bird") {
    return {
      species: "bird",
      name: name,
      eat: function () {
        console.log(`${this.name} eats.`);
      }, 
      walk: function () {
        console.log(`${this.name} walks.`);
      }, 
      sleep: function () {
        console.log(`${this.name} sleeps.`);
      }, 
      sing: function () {
        console.log(`${this.name} sings.`);
      }
    } as Bird;
  } else {
    throw `Sorry we do not have a ${pet}. Would you like to buy a dog?`;
  }
};


function petIsCat(pet: Pet): pet is Cat {
  return pet.species === "cat";
}

function petIsDog(pet: Pet): pet is Dog {
  return pet.species === "dog";
}

function petIsBird(pet: Pet): pet is Bird {
  return pet.species === "bird";
}

function playWithPet(pet: Pet){
  console.log(`Hey ${pet.name}, lets play.`);
  if(petIsCat(pet)) {
    // pet is now from type Cat (pet: Cat)
    pet.eat();
    pet.sleep();
    /*
      // Error: Type '"bird"' is not assignable to type '"cat"'.
      // pet.type = "bird";
      // Error: Property 'sing' does not exist on type 'Cat'.
      // pet.sing();
    */
  } else if(petIsDog(pet)) {
    // pet is now from type Dog (pet: Dog)
    pet.eat();
    pet.walk();
    pet.sleep();
  } else if(petIsBird(pet)) {
    // pet is now from type Bird (pet: Bird)
    pet.eat();
    pet.sing();
    pet.sleep();
  } else {
    throw "An unknown pet. Did you buy a rock?";
  }
}

let dog = buyPet(myFavoritePet /* "dog" as defined above */, "Dog-Rocky");
let bird = buyPet(myFavoritePet /* "bird" as defined above */, "Bird-Rocky");
let cat = buyPet(myFavoritePet /* "cat" as defined above */, "Cat-Rocky");

playWithPet(dog);
console.log('-----------------\n');
playWithPet(bird);
console.log('-----------------\n');
playWithPet(cat);
console.log('-----------------\n');

/*
Hey Dog-Rocky, lets play.
Dog-Rocky eats.
Dog-Rocky walks.
Dog-Rocky sleeps.
-----------------

Hey Bird-Rocky, lets play.
Bird-Rocky eats.
Bird-Rocky walks.
Bird-Rocky sleeps.
-----------------

Hey Cat-Rocky, lets play.
Cat-Rocky eats.
Cat-Rocky walks.
Cat-Rocky sleeps.
-----------------
*/