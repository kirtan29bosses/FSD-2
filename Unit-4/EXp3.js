var exp = require('express')
var app = exp();

app.get('/user/:userid/test/:testv',function(req,res){
    res.send(req.params);
}).listen(3435)