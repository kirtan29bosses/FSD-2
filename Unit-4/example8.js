var exp = require('express')
var pm = require('path')
var app = exp();

app.use(exp.static(__dirname,{index:'example8.html'}))
app.get('/login',function(req,res,next) {
    res.set("content-type","text/html");
    res.write("Welcome " + req.query.name + "!" + "<br>")
    res.write("Your email id is : " + req.query.mail + "<br>")
    next();
});
app.get('/login',function(req,res) {
    if(req.query.subscribe == "on") {
        res.write("Thank you for subcription" + "<br>");
        res.write("<a href='/'> Logout </a>")
        res.send()
    }
    else {
        res.write("You can subscribe to get daily updates" + "<br>");
        res.write("<a href='/subscription'> Subscribe </a>" + "<br>")
        res.send()
    }
});
app.get('/subscription',function(req,res) {
    res.set("content-type","text/html");
    res.write("Thank you for subcription" + "<br>");
    res.write("<a href='/'> Logout </a>")
    res.send()
});
app.listen(3435)