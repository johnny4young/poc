// add.js
'use strict'
module.exports = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw Error('inputs must be numbers')
    }
    return a + b
}

//req.js
'use strict'
module.exports = (url, cb) => {
    setTimeout(() => {
        if (url === 'ht‌tp://error.com') cb(Error('network error'))
        else cb(null, Buffer.from('some data'))
    }, 300)
}

//req-prom.js
'use strict'
const { setTimeout: timeout } = require('timers/promises')
module.exports = async (url) => {
    await timeout(300)
    if (url === 'ht‌tp://error.com') throw Error('network error')
    return Buffer.from('some data')
}



'use strict'
const add = require('../add')
test('throw when inputs are not numbers', async () => {
    expect(() => add('5', '5')).toThrowError(
        Error('inputs must be numbers')
    )
    expect(() => add(5, '5')).toThrowError(
        Error('inputs must be numbers')
    )
    expect(() => add('5', 5)).toThrowError(
        Error('inputs must be numbers')
    )
    expect(() => add({}, null)).toThrowError(
        Error('inputs must be numbers')
    )
})
test('adds two numbers', async () => {
    expect(add(5, 5)).toStrictEqual(10)
    expect(add(-5, 5)).toStrictEqual(0)
})



//request
'use strict'
const req = require('../req')

test('handles network errors', (done) => {
    req('ht‌tp://error.com', (err) => {
        expect(err).toStrictEqual(Error('network error'))
        done()
    })
})

test('responds with data', (done) => {
    req('ht‌tp://example.com', (err, data) => {
        expect(err == null).toBe(true)
        expect(Buffer.isBuffer(data)).toBeTruthy()
        expect(data).toStrictEqual(Buffer.from('some data'))
        done()
    })
})

// request-prom
'use strict'
const req = require('../req-prom')

test('handles network errors', async () => {
    await expect(req('ht‌tp://error.com'))
        .rejects
        .toStrictEqual(Error('network error'))
})

test('responds with data', async () => {
    const data = await req('ht‌tp://example.com')
    expect(Buffer.isBuffer(data)).toBeTruthy()
    expect(data).toStrictEqual(Buffer.from('some data'))
})
