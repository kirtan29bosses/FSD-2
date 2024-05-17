// Write a node js program to load a simple html file & display its content on browser as an 
// html content

var u = require("url")
var ps = require('fs')
var http = require('http')
var addr = "http://localhost:3435/http7.html"
var q = u.parse(addr,true)
data = ps.readFileSync("."+q.pathname)
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(data)
    res.end()
}).listen(3435)

// npm install -g nodemon
// inside terminal --> nodemon http1.js