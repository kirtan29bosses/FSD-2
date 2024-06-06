// Using "POST" method

var exp = require('express')
var app = exp();

app.use(exp.urlencoded())
app.use(exp.static(__dirname,{index:'example5.html'}))
app.post('/process_post', function(req,res) {
    res.send(req.body);
}).listen(3435)