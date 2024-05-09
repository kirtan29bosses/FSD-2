// Read the data from file & sort the data in ascending order

var ps = require("fs")
// ps.writeFileSync("node/example.txt","7 2 5 3 4 1 6")
data = ps.readFileSync("node/example.txt","utf-8")
data = data.split(",")
data = data.sort()
// console.log(data) --> Output:- String format

let p = []
for(i=0; i<data.length; i++) {
    p[i] = parseInt(data[i])
}
console.log(p) // --> Output:- Integer format