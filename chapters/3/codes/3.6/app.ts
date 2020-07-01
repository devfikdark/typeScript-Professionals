function hello(name: string): string {
  return `Hello ${name}!`;
}

/*
Here the syntax name: string means that the function can accept one name argument and 
this argument can only be string and (...): string { means that the return value can 
only be a string
Usage:
*/

console.log(hello('StackOverflow Documentation')); 
// will be return Hello StackOverflow Documentation!
