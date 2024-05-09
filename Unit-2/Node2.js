// File System Module [Synchonize method]

var ps = require("fs")
// ps.appendFileSync("node/write.txt","Hi")
// data = ps.readFileSync("node/write.txt")
// console.log(data) --> Output:- "<Buffer 48 65 6c 6c 6f 48 69 48 69>"

// data = ps.readFileSync("node/write.txt")
// console.log(data.toString()) --> Output:- "HelloHi"

// OR

// data = ps.readFileSync("node/write.txt","utf-8")
// console.log(data) --> Output:- "HelloHi"

// To Rename file
// ps.renameSync("node/write.txt","node/read_write.txt")

// To delete file
// ps.unlinkSync("node/write2.txt")