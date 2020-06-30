ts-node is an npm package which allows the user to run typescript files directly, without the need for precompilation using tsc . It also provides REPL.

### Install ts-node globally using
- `npm install -g ts-node`

### ts-node does not bundle typescript compiler, so you might need to install it.
- `npm install -g typescript`

### Executing script
To execute a script named main.ts, run
- `ts-node main.ts`

### main.ts (example file)
console.log("Hello world");

### Example usage
- $ `ts-node main.ts`
Hello world

### Running REPL
To run REPL run command ts-node

- Example usage
```
$ `ts-node`
> const sum = (a, b): number => a + b;
> `undefined`
> `sum(2, 2)`
> 4
> .exit
```

To exit REPL use command `.exit` or press `CTRL+C` twice.