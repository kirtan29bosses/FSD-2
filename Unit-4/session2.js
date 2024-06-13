// Create 'index.html' file which contain username, password. After clicking
// submit button it should jump on 'savesession' page. Store username & password in session.
// After saving session, redirect to 'fetchsession' page and read value. Put a 'logout' link
// button here. Jump on 'deletesession' page after clicking 'logout' button. Destroy the
// session on this page & redirect to 'index.html'

var exp = require('express')
const es = require('express-session')
const app = exp()

app.use(es({
    resave:true,
    saveUninitialized:true,
    secret:"RAJ123"
}))
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/index.html');
    res.set("content-type","text/html");
    app.get('/savesession', function(req,res) {
        req.session.uname = req.query.uname
        req.session.pwsd = req.query.pwsd
        res.redirect("/fetchsession")
    })
})
app.get('/fetchsession', function(req,res) {
    res.set("content-type","text/html");
    res.write("Welcome : " + req.session.uname + "<br>")
    res.write("Password : " + req.session.pwsd + "<br>")
    res.write("<a href='/deletesession'> Logout </a>")
    res.send()
})
app.get('/deletesession', function(req,res) {
    req.session.destroy()
    res.write("<h1> Session Destroyed </h1>")
    res.write("<a href='/fetchsession'> Logout </a>")
    res.send()
})
app.listen(3435)