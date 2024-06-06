// html in frontend & js in backend. html display in home page & /login
// html -> username, password, button
// button -> color black & text color white
// if username is "admin" then display "welcome admin" on login page
// if username is not "admin" then display "plz login with admin" on login page

var exp = require('express')
var pm = require('path')
var app = exp();

const sp = pm.join(__dirname, "../frontend")
app.use(exp.urlencoded())
app.use(exp.static(sp,{index:'example6.html'}))
app.post('/login',function(req,res) {
    res.set("content-type","text/html");
    usrname = req.body.uname
    if(usrname == "Admin" || usrname == "admin") {
        res.write("<h1 style='color:green'> Welcome Admin! </h1>")
    }
    else {
        res.write("<h1 style='color:red'> Please login with Admin! </h1>")
    }
    res.send()
}).listen(3435)