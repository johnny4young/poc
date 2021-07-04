import pkg from '@leverege/base62-util'
const { encode } = pkg

// this is a example of two users(id tokens different)

const idToken1 = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjUxNTIyMjIsImV4cCI6MTYyNTIzODYyMiwiYXVkIjoiOHRxOVd1RzlIYW9NcElFbFJLbEpydWtmYWJVNGdBSGkiLCJpc3MiOiJodHRwczovL21hbmhlaW0tdXMtYXBpLmNveDJtLmNvbSIsInN1YiI6ImJsdWV8N3k2RDUyZUtFOFVyYnpBM29rOU10WSJ9.1Ffdmdhzfw3BmAgl9fjNb0bd0DLNXzR3as-zoGJhjOk"

const idToken2 = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmoiOiIxMThld1NROWI2N1BvM0o3UFR1NkhjIiwiaWF0IjoxNjI1MTUyOTY1LCJleHAiOjE2MjUyMzkzNjUsImF1ZCI6IjdWM2FrbzV0eUwzekhFRmlDa2hoMjU4OHp2WC1WaXNzIiwiaXNzIjoiaHR0cHM6Ly9jb3gybS1kZWFsZXJzLWltYWdpbmUtYXBpLmNveDJtLmNvbSIsInN1YiI6IjF0N0dIM2VCa1dIbDZ6OW5VcUdTM0UifQ.NkDoojuvXLGESm3yBHajv7OuQj-eO5pzWKJSupR3VVU"

const SYSTEM_NAMESPACE = "systemVerify"

function getSystemKey( siteId, jwt ) {
  const rawEncoded = encode( jwt, '' )
  const shortEncoded = rawEncoded.slice( 0, 16 )
  const cacheKey = `${SYSTEM_NAMESPACE}:${siteId}-${shortEncoded}`
  return cacheKey
}

const cache1 = getSystemKey("knvl", idToken1)
const cache2 = getSystemKey("knvl", idToken2)

console.log(cache1)
console.log(cache2)

