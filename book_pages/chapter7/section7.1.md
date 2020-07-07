# Section 7.1: Abstract Classes

```ts
abstract class Machine {
  constructor(public manufacturer: string) {

  }

  // An abstract class can define methods of its own, or...
  summary(): string {
    return `${this.manufacturer} makes this machine.`;
  }

  // Require inheriting classes to implement methods
  abstract moreInfo(): string;
}

class Car extends Machine {
  constructor(manufacturer: string, public position: number, protected speed: number) {
    super(manufacturer);
  }

  move() {
    this.position += this.speed;
  }

  moreInfo() {
    return `This is a car located at ${this.position} and going ${this.speed}mph!`;
  }
}

let myCar = new Car("Konda", 30, 70);
myCar.move(); // position is now 80
console.log(myCar.summary()); // prints "Konda makes this machine."
console.log(myCar.moreInfo()); // prints "This is a car located at 80 and going 70mph!"
```