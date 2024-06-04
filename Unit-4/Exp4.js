var exp = require('express')
var app = exp();

app.use(exp.static(__dirname,{index:'Exp4.html'}))
app.listen(3435)
app.get('/process_get',function(req,res) {
    response = {
        fname:req.query.fname,
        lname: req.query.lname
    }
    console.log(req.query)
    res.send(response);
}).listen(4753)