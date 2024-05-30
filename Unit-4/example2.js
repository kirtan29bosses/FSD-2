var exp = require('express')
var app = exp();
var u = require('url')

var student = {
    name: "Raj",
    age: 28
}

app.get('/',function(req,res){
    // res.write(JSON.stringify(student))
    // res.send(student); // No need to convert into string
    res.json(student)
}).listen(3435)