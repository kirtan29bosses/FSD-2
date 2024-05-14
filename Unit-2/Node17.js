// Write a node js script to print query string of url in file

var u = require("url")
var ps = require('fs')
var addr = "http://localhost:8080/default.html?year=2025&month=Feb";
var q = u.parse(addr)
qdata = q.query
ps.writeFile("node/url.txt", qdata, (err) => {console.log("Completed!")})