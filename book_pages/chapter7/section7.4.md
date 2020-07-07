# Section 7.4: Constructors

```ts
class Car {
  public position: number;
  protected speed: number;
  constructor(position: number, speed: number) {
    this.position = position;
    this.speed = speed;
  }
  move() {
    this.position += this.speed;
    return this.position;
  }
}

let myCar = new Car(30, 56);
console.log(myCar.move()); // 86
```

```ts
class Car {
  constructor(public position: number, protected speed: number) {}
  move() {
    this.position += this.speed;
  }
}
```

```ts
var Car = (function () {
  function Car(position, speed) {
    this.position = position;
    this.speed = speed;
  }

  Car.prototype.move = function () {
    this.position += this.speed;
  };

  return Car;
}());

let myCar = new Car(23, 32);
console.log(myCar); // Car { position: 23, speed: 32 }
```

Constructors of derived classes have to call the base class constructor with **super()** .
```ts
class SelfDrivingCar extends Car {
  constructor(startAutoPilot: boolean) {
    super(0, 42);
    if (startAutoPilot) {
      this.move();
    }
  }
}

let car = new SelfDrivingCar(true);
console.log(car.position); // access the public property position
```