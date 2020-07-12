# Section 8.2: Passing arguments to a class decorator

We can wrap a class decorator with another function to allow customization:
```ts
function addMetadata(metadata: any) {
  return function log(target: any) {
    // Add metadata
    target.__customMetadata = metadata;
    
    // Return target
    return target;
  }
}
```
The addMetadata takes some arguments used as configuration and then returns an unnamed function which is 
the actual decorator. In the decorator we can access the arguments because there is a closure in place.
We can then invoke the decorator passing some configuration values:
```ts
@addMetadata({ guid: "417c6ec7-ec05-4954-a3c6-73a0d7f9f5bf" })
class Person {
  private _name: string;

  public constructor(name: string) {
    this._name = name;
  }

  public greet() {
    return this._name;
  }
}

// We can use the following function to access the generated metadata:
function getMetadataFromClass(target: any) {
  return target.__customMetadata;
}

console.log(getMetadataFromInstance(Person));

// If everything went right the console should display:
{ guid: "417c6ec7-ec05-4954-a3c6-73a0d7f9f5bf" }
```