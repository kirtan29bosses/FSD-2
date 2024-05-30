var exp = require('express')
var app = exp();

app.get('/',function(req,res){
    res.set("content-type","text/html");
    res.send("<h1>Hello Raj Patel</h1>");
    app.get('/about',function(req,res) {
    res.set("content-type","text/html");
    res.send("<h1>This is About Us Page</h1>");
    })
}).listen(3435, () => {console.log("Server started")})