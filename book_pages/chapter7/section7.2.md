# Section 7.2: Simple class

```ts
class Car {
  public position: number = 50;
  private speed: number = 42;

  move() {
    this.position += this.speed;
  }
}

var car = new Car(); // create an instance of Car
car.move(); // call a method
console.log(car.position); // access a public property
```