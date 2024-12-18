'use strict'
const {promisify} = require('util')

const print = (err, contents) => {
    if (err) console.error(err)
    else console.log(contents)
}

const opA = (cb) => {
    setTimeout(() => {
        cb(null, 'A')
    }, 500)
}

const opB = (cb) => {
    setTimeout(() => {
        cb(null, 'B')
    }, 250)
}

const opC = (cb) => {
    setTimeout(() => {
        cb(null, 'C')
    }, 125)
}

const opAAsync = promisify(opA)
const opBAsync = promisify(opB)
const opCAsync = promisify(opC)

opAAsync()
    .then(contents => {
        print(null, contents);
        return opBAsync()
    })
    .then(contents => {
        print(null, contents);
        return opCAsync()
    })
    .then(contents => print(null, contents))
    .catch(print)
