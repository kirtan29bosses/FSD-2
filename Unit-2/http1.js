var http = require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'}) // Always write this line at first
    res.write("Hello World!")
    res.write("<h1> Hello Raj <h1>")
    res.end()
}).listen(3435)