# Section 7.7: Monkey patch a function into an existing class

Sometimes it's useful to be able to extend a class with new functions. For example 
let's suppose that a string should be converted to a camel case string. So we need to 
tell TypeScript, that String contains a function called toCamelCase , which returns a 
string .
```ts
interface String {
  toCamelCase(): string;
}
```

### Now we can patch this function into the String implementation.
```ts
String.prototype.toCamelCase = function() : string {
  return this.replace(/[^a-z ]/ig, '')
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: any, index: number) => {
      return + match === 0 ? "" : match[index === 0 ? 'toLowerCase' : 'toUpperCase']();
    });
}
```
If this extension of String is loaded, it's usable like this:
```ts
"This is an example".toCamelCase(); // => "thisIsAnExample"
```