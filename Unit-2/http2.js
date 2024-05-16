// How to fetch url in run time

var http = require('http')
http.createServer(function(req,res){
    res.write(req.url)
    res.end('url fetched')
}).listen(3435)