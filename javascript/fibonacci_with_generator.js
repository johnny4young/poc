function* fibonacci(n){
  let a = 0
  let b = 1
  for( const i of Array(n).keys() ) {
    yield a
    a=b
    b= a+b
  }
}

const amount = 200

// gets first 200 numbers from the Fibonacci generator starting from 0
const fib = fibonacci(amount)
let item = fib.next()
while (item.value !== undefined) {
  console.log(item.value);
  item = fib.next()
}