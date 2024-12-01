'use strict'
const { test } = require('tap')
const req = require('../req')

// function

test('handles network errors', ({ strictSame, end }) => {
    req('ht‌tp://error.com', (err) => {
        strictSame(err, Error('network error'))
        end()
    })
})

test('responds with data', ({ ok, strictSame, error, end }) => {
    req('ht‌tp://example.com', (err, data) => {
        error(err)
        ok(Buffer.isBuffer(data))
        strictSame(data, Buffer.from('some data'))
        end()
    })
})


// Promises

'use strict'
const { test } = require('tap')
const req = require('../req-prom')

test('handles network errors', async ({ rejects }) => {
    await rejects(req('ht‌tp://error.com'), Error('network error'))
})

test('responds with data', async ({ ok, strictSame }) => {
    const data = await req('ht‌tp://example.com')
    ok(Buffer.isBuffer(data))
    strictSame(data, Buffer.from('some data'))
})
