// Write a node js script to write an array of object with properties 'name' & 'age' in a file
// name 'student.txt', then read the file & display the object on console.

const students = [
    {
    name: "Raj",
    age: 19
    },
    {
        name: "Zulfi",
        age: 19
    },
    {
        name: "Kishor",
        age: 19
    },
    {
        name: "Jenish",
        age: 19
    },
    {
        name: "Bhavin",
        age: 19
    }
]

var ps = require("fs")

// ps.writeFileSync("node/student.txt",JSON.stringify(students))
data = ps.readFileSync("node/student.txt","utf-8")
console.log(JSON.parse(data))