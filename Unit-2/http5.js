var u = require("url")
var http = require('http')
http.createServer(function(req,res){
    if(req.url == "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1> Home Page </h1> <div> <ul> <li> <a href='/'> Home </a></li> <li> <a href='/about'> About Us </a></li></ul></div>")
        res.end()
    }
    else if(req.url=="/about") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1> About Us Page </h1>")
        res.end()
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Page not found!")
    }
}).listen(3435)