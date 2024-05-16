// How to fetch url in static

var u = require("url")
var http = require('http')
var addr = "http://localhost:3435:default.html?year=2024&month=May"
var q = u.parse(addr,true)
qdata = q.query
http.createServer(function(req,res){
    res.write(qdata.year+" "+qdata.month)
    res.end()
}).listen(3435)