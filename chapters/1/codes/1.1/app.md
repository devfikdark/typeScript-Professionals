TypeScript is a typed superset of JavaScript that compiles directly to JavaScript code. TypeScript files commonly use the `.ts` extension. Many IDEs support TypeScript without any other setup required, but TypeScript can also be compiled with the `TypeScript Node.JS` package from the command line.

### Install the npm package globally
You can install TypeScript globally to have access to it from any directory.
- `npm install -g typescript`

### Install the npm package locally
You can install TypeScript locally and save to `package.json` to restrict to a directory.
npm install typescript --save-dev Installation channels

### You can install from:
- Stable channel: `npm install typescript`
- Beta channel: `npm install typescript@beta`
- Dev channel: `npm install typescript@next`

### Compiling TypeScript code
The tsc compilation command comes with typescript , which can be used to compile code.
- `tsc my-code.ts`
This creates a my-code.js file.