// const regex = /(a)(b)/d;
// const match = regex.exec("xy");
// console.log(match.index[0]); // [0, 2]
// console.log(match.index[1]); // [0, 1]
// console.log(match.index[2]); // [1, 2]


switch ( 'a' ) {
  
  case 'd': case 'deg':
    console.log('d')
    break;
  case 'dm': case 'deg+min':
    console.log('dm')
    break;
  case 'dms': case 'deg+min+sec':
    console.log('dms')
    break;
  default: // invalid format spec!
}

let condition = true;
setTimeout(() => {
  condition = false;
}, 0);

while (condition) {
  console.log('cuantas veces me ejecuto')
}



console1.log(name1());
console2.log(name2());

function name1() {}
var name2 = function() {}