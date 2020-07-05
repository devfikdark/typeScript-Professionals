# Section 6.2: Function as a parameter

### Suppose we want to receive a function as a parameter, we can do it like this:
```ts
function foo(otherFunc: Function): void {
  ...
}
```

### If we want to receive a constructor as a parameter:
```ts
function foo(constructorFunc: { new() }) {
  new constructorFunc();
}

function foo(constructorWithParamsFunc: { new(num: number) }) {
  new constructorWithParamsFunc(1);
}
```

### Or to make it easier to read we can define an interface describing the constructor:
```ts
interface IConstructor {
  new();
}

function foo(contructorFunc: IConstructor) {
  new constructorFunc();
}
```
### Or with parameters:
```ts
interface INumberConstructor {
  new(num: number);
}

function foo(contructorFunc: INumberConstructor) {
  new contructorFunc(1);
}
```

### Even with generics:
```ts
interface ITConstructor<T, U> {
  new(item: T): U;
}

function foo<T, U>(contructorFunc: ITConstructor<T, U>, item: T): U {
  return new contructorFunc(item);
}
```

### If we want to receive a simple function and not a constructor it's almost the same:
```ts
function foo(func: { (): void }) {
  func();
}

function foo(constructorWithParamsFunc: { (num: number): void }) {
  new constructorWithParamsFunc(1);
}
```
### Or to make it easier to read we can define an interface describing the function:
```ts
interface IFunction {
  (): void;
}

function foo(func: IFunction ) {
  func();
}
```

### Or with parameters:
```ts
interface INumberFunction {
  (num: number): string;
}

function foo(func: INumberFunction ) {
  func(1);
}
```

### Even with generics:
```ts
interface ITFunc<T, U> {
  (item: T): U;
}

function foo<T, U>(contructorFunc: ITFunc<T, U>, item: T): U {
  return func(item);
}
```