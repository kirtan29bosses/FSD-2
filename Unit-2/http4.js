// How to fetch url in run time

var u = require("url")
var http = require('http')
http.createServer(function(req,res){
    var q = u.parse(req.url,true).query
    res.end(q.year+" "+q.month)
}).listen(3435)