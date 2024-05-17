// Validator [True/False]

import validator from "validator";

let email = "test@gmail.com"
console.log(validator.isEmail(email)) // --> true

let email1 = "test@"
console.log(validator.isEmail(email1)) // --> false

let name = "hello"
console.log(validator.isLowercase(name)) // --> true

let name1 = "Hello"
console.log(validator.isLowercase(name1)) // --> false

let name2 = ""
console.log(validator.isEmpty(name2)) // --> true

let name3 = "Hello"
console.log(validator.isEmpty(name3)) // --> false