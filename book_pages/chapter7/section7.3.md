# Section 7.3: Basic Inheritance

```ts
class Car {
  public position: number = 25;
  protected speed: number = 42;

  move() {
    this.position += this.speed;
    console.log(this.position);
  }
}
  
class SelfDrivingCar extends Car {
  move() {
    //super.move();
    console.log('Hi Morol');
  }
}

let myCar = new Car();
myCar.move(); // 67

myCar = new SelfDrivingCar();
myCar.move(); // Hi Morol
```