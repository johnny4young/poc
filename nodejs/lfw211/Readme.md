## Notes


It's crucial to understand that this refers to the object on which the function was called, not the object which the function was assigned to.

When defined without curly braces, the expression following the fat arrow (=>) is the return value of the function. 
Lambda functions do not have their own this context, when this is referenced inside a function, it refers to the this of the nearest parent non-lambda function.

There are many approaches and variations to creating a prototype chain in JavaScript but we will explore three common approaches:

- functional(Object.create).
- constructor functions(new).
- class-syntax constructors(). 



The Property Descriptor is a JavaScript object that describes the characteristics of the properties on another object.

The Object.getOwnPropertyDescriptor can be used to get a property descriptor on any object.
The prototype of an object can be inspected with Object.getPrototypeOf.

Object.setPrototypeOf

The class keyword is syntactic sugar that actually creates a function. Specifically it creates a function that should be called with new. 
It creates a Constructor Function, the very same Constructor Function discussed in the previous section.


```javascript
class Wolf {
  constructor (name) {
    this.name = name
  }
  howl () { console.log(this.name + ': awoooooooo') }
}
```

desugar to:

```javascript
function Wolf(name) {
  this.name = name
}
Wolf.prototype.howl = function () {
  console.log(this.name + ': awoooooooo')
}
```



## useful commands
```bash
node -e "fs.appendFileSync(path.join(os.homedir(), '.npmrc'), '\npackage-lock=false\n')"
node -p "fs.readdirSync('.').join('\t')"
node -e "fs.rmSync('node_modules', { recursive: true})"
echo "import uprev from './index.js'; console.log(uprev('hello'))" | node --input-type=module
npm ls --depth=200 # list all dependencies with depth 200
```

## Buffer

a buffer object is both an instance of Buffer and an instance (at the second degree) of Uint8Array.


The process.stdin.isTTY property can be checked to determine whether our process is being piped to on the command line or whether input is directly connected to the terminal. 
In the latter case process.stdin.isTTY will be true, otherwise it is undefined (which we can coerce to false).

The spawn method and the exec method both returning a ChildProcess instance can be misleading. 
There is one highly important differentiator between spawn and the other three methods we've been exploring (namely exec, execSync and spawnSync): the spawn method is the only method of the four that doesn't buffer child process output

```javascript
'use strict'
const { execSync } = require('child_process')
const output = execSync(
    `${process.execPath} -e "console.error('subprocess stdio output')"`
)
console.log(output.toString())
```

```javascript
'use strict'
const { spawnSync } = require('child_process')
const result = spawnSync(
  process.execPath,
  ['-e', `console.log('subprocess stdio output')`]
)
console.log(result)
```
