// [4.] URL Module

var u = require("url")

var addr = "http://localhost:8080/default.html?year=2025&month=Feb";
var q = u.parse(addr,true)
console.log(q)
console.log(q.host)
console.log(q.pathname)
console.log(q.search)
console.log(q.query)
qdata = q.query
console.log(qdata.year)
if(qdata.year%4 == 0) {
    console.log("leap year")
}
else {
    console.log("not leap year")
}