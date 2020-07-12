# Section 8.3: Basic class decorator

A class decorator is just a function that takes the class as its only argument and returns it after doing 
something with it:
```ts
function myClassDecorator<T>(target: T) {
  // Do something with target
  console.log(target);

  // Return target
  return target;
}

// We can then apply the class decorator to a class:
@myClassDecorator
class Person {
  private _name: string;

  public constructor(name: string) {
    this._name = name;
  }

  public greet() {
    return this._name;
  }
}
```