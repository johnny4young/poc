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

