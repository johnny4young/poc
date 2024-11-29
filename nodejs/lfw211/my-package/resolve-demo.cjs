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
