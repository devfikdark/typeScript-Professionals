# Section 6.1: Optional and Default Parameters

### Optional Parameters

In TypeScript, every parameter is assumed to be required by the function. You can add 
a `?` at the end of a parameter name to set it as optional.

For example, the lastName parameter of this function is optional:
```ts
function buildName(firstName: string, lastName?: string) {
  // ...
}
```

Optional parameters **must come after** all non-optional parameters:
```ts
function buildName(firstName?: string, lastName: string) // Invalid
```

### Default Parameters

If the user passes undefined or doesn't specify an argument, the default value will be 
assigned. These are called default-initialized parameters.
For example, `"Smith" is the default value` for the lastName parameter.

```ts
function buildName(firstName: string, lastName = "Smith") {
  // ...
}

buildName('foo', 'bar'); // firstName == 'foo', lastName == 'bar'
buildName('foo'); // firstName == 'foo', lastName == 'Smith'
buildName('foo', undefined); // firstName == 'foo', lastName == 'Smith'
```