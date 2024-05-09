// Write a node js script to copy content of one file to another file. Data should be fetch
// from Source.txt and inserted into Destination.txt

var ps = require("fs")
//ps.writeFileSync("node/source.txt","Hi! My name is Raj.")
data = ps.readFileSync("node/source.txt","utf-8")
ps.writeFileSync("node/destination.txt",data)
data1 = ps.readFileSync("node/destination.txt","utf-8")
console.log(data1)