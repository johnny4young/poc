'use strict'

// Resolving a Module Path in CJS

console.log()
console.group('# package resolution')
console.log(`require('pino')`, '\t', '  =>', require.resolve('pino'))
console.log(`require('standard')`, '\t', '  =>', require.resolve('standard'))
console.groupEnd('')
console.log()

console.group('# directory resolution')
console.log(`require('.')`, '\t\t', '  =>', require.resolve('.'))
console.log(`require('../my-package')`, '=>', require.resolve('../my-package'))
console.groupEnd()
console.log()

console.group('# file resolution')
console.log(`require('./format')`, '\t', '  =>', require.resolve('./format'))
console.log(`require('./format.js')`, '  =>', require.resolve('./format.js'))
console.groupEnd()
console.log()

console.group('# core APIs resolution')
console.log(`require('fs')`, '\t', '  =>', require.resolve('fs'))
console.log(`require('util')`, '\t', '  =>', require.resolve('util'))
console.groupEnd()
console.log()



//Resolving a Module Path in ESM
import { pathToFileURL } from 'url'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

console.log(
    `import 'pino'`,
    '=>',
    pathToFileURL(require.resolve('pino')).toString()
)


// assign data
Buffer.concat(data)
Array.from(Array(3)).fill(__filename)


const { readFile } = require('fs').promises
const files = [__filename, 'not a file', __filename]
const print = (results) => {
  results
    .filter(({status}) => status === 'rejected')
    .forEach(({reason}) => console.error(reason))
  const data = results
    .filter(({status}) => status === 'fulfilled')
    .map(({value}) => value)
  const contents = Buffer.concat(data)
  console.log(contents.toString())
}

const readers = files.map((file) => readFile(file))

Promise.allSettled(readers)
  .then(print)
  .catch(console.error)



const { readFile } = require('fs').promises

const print = (contents) => {
    console.log(contents.toString())
}

const files = Array.from(Array(3)).fill(__filename)

async function run () {
    const data = []
    for (const file of files) {
        data.push(await readFile(file))
    }
    print(Buffer.concat(data))
}

run().catch(console.error)


const { readFile } = require('fs').promises
const files = [__filename, 'foo', __filename]
const print = (contents) => {
    console.log(contents.toString())
}

async function run () {
    const readers = files.map((file) => readFile(file))
    const results = await Promise.allSettled(readers)

    results
        .filter(({status}) => status === 'rejected')
        .forEach(({reason}) => console.error(reason))

    const data = results
        .filter(({status}) => status === 'fulfilled')
        .map(({value}) => value)

    print(Buffer.concat(data))
}

run().catch(console.error)

