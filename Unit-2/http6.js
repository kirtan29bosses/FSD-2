// Write a node js script to request server to display json data on browser

var u = require("url")
var http = require('http')
http.createServer(function(req,res){
    if(req.url == "/") {
        const a = {
            "Name":"Raj",
            "Age":19
        };
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(a))
        res.end()
    }
}).listen(3435)