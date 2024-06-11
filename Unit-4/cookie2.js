// Write an express js script to set cookies of submitted value of form.

var exp = require('express')
const cp = require('cookie-parser')
const app = exp()

app.use(exp.static(__dirname,{index:'cookie2.html'}))
app.use(cp())
app.get('/next', function(req,res) {
    res.cookie("Fname", req.query.fname);
    res.cookie("Lname", req.query.lname);
    res.cookie("Password", req.query.pwsd);
    res.redirect("/admin");
})

app.get('/admin', function(req,res) {
    res.set("content-type","text/html");
    // res.clearCookie('Password') --> This will delete the particular cookie and will show 'undefined'
    res.write("First Name: " + req.cookies.Fname + "<br>")
    res.write("Last Name: " + req.cookies.Lname + "<br>")
    res.write("Password: " + req.cookies.Password)
    res.send()
}).listen(3435)