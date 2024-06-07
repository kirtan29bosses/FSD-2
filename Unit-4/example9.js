// Write a express js script to load html file having username and password and submit button.
// On clicking submit button, it should jump on check page using post method. If username is
// 'admin' then jump on next middleware to print 'Welcome admin'. If username is not 'admin'
// then stay on same middleware to print msg 'Wrong credentials' in red color.

var exp = require('express')
var pm = require('path')
var app = exp();

app.use(exp.urlencoded())
app.use(exp.static(__dirname,{index:'example9.html'}))
app.post('/check', function(req,res,next) {
    res.set("content-type","text/html");
    if(req.body.uname == 'Admin' || req.body.uname == 'admin') {
        next()
    }
    else {
        res.write("<font color='red'>Wrong Credentials</font>")
        res.send()
    }
})
app.post('/check', function(req,res) {
    res.write("<font color='green'> Welcome Admin! </font>")
    res.send()
})
app.listen(3435)