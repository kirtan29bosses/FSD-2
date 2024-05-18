// Write a node js script to create a class name 'person' by assigning 'name' & 'age' as member
// Create one function name 'elder' which return elder function object. Details of elder person
// should be printed in console as well as in file.

class person{
    constructor(name,age) {
        this.age = age
        this.name = name
    }
    elder(p) {
        if (this.age > p.age) {
            return this;
        }
        else {
            return p;
        }
    }
}

var p1 = new person("Raj",19)
var p2 = new person("Zulfi",10)
var p3 = p1.elder(p2)
console.log("Elder person is " + p3.name)

var ps = require('fs')
ps.writeFileSync("node/ex2.txt", JSON.stringify(p3))