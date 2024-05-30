// npm install express

var exp = require('express')
var app = exp();

app.get('/',function(req,res) {
    // res.write("Raj Patel") --> If you write "res.write()" then "res.send('')" should be empty i.e "res.send()"
    res.set("content-type","text/html");
    res.send("<h1>Hello World</h1>"); // In this there is no need to write "res.end()"
}).listen(3435) // Other parameters: listen(3435, [hostname], [callback])