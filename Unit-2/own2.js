// var ow = require('./own1.js');
// console.log(ow(10,15))
// console.log(ow.s(10,15))
// console.log(ow.m(10,15))

// Other method
var {s,m} = require('./own1.js')
console.log(s(10,7))
console.log(m(10,7))

// var {sub,mul,name} = require('./own1.js')
// console.log(sub(10,7))
// console.log(mul(10,7))
// console.log(name)