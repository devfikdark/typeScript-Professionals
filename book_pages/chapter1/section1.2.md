# Section 1.2: Basic syntax

TypeScript is a typed superset of JavaScript, which means that all JavaScript code is 
valid TypeScript code. TypeScript adds a lot of new features on top of that.

TypeScript makes JavaScript more like a strongly-typed, object-oriented language akin 
to C# and Java. This means that TypeScript code tends to be easier to use for large 
projects and that code tends to be easier to understand and maintain. The strong 
typing also means that the language can (and is) precompiled and that variables cannot 
be assigned values that are out of their declared range. For instance, when a 
TypeScript variable is declared as a number, you cannot assign a text value to it. 

This strong typing and object orientation makes TypeScript easier to debug and 
maintain, and those were two of the weakest points of standard JavaScript.

You can add type declarations to variables, function parameters and function return 
types. The type is written after a colon following the variable name, like this: var 
num: number = 5; The compiler will then check the types (where possible) during 
compilation and report type errors.
```ts
var num: number = 5;
num = "this is a string";
// error: Type 'string' is not assignable to type 'number'.
```

- The basic types are :
  - number (both integers and floating point numbers)
  - string
  - boolean
  - Array . You can specify the types of an array's elements. There are two equivalent ways to define array types:
  - Array<T> and T[] . For example:
    - number[] - array of numbers
    - Array<string> - array of strings
  - Tuples. Tuples have a fixed number of elements with specific types.
    - [boolean, string] - tuple where the first element is a boolean and the second is a string.
    - [number, number, number] - tuple of three numbers.
  - {} - object, you can define its properties or indexer
    - {name: string, age: number} - object with name and age attributes
    - {[key: string]: number} - a dictionary of numbers indexed by string
  - enum - { Red = 0, Blue, Green } - enumeration mapped to numbers
  - Function. You specify types for the parameters and return value:
    - (param: number) => string - function taking one number parameter returning string
    - () => number - function with no parameters returning an number.
    - (a: string, b?: boolean) => void - function taking a string and optionally a boolean with no return value.
  - any - Permits any type. Expressions involving any are not type checked.
  - void - represents "nothing", can be used as a function return value. Only null and undefined are part of the void type.
  - never
    - let foo: never; -As the type of variables under type guards that are never true.
    - function error(message: string): never { throw new Error(message); } - As the return type of functions that never return.
  - null - type for the value null . null is implicitly part of every type, unless strict null checks are enabled.