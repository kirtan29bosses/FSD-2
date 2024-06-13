// npm install express-session

var exp = require('express')
const es = require('express-session')
const app = exp()

app.use(es({
    resave:true, // This is not a compulsory line
    saveUninitialized:true, // This is not a compulsory line
    secret:"RAJ123" // This is a must compulsory line
}))
app.get('/', function(req,res) {
    res.set("content-type","text/html");
    if(req.session.page) {
        req.session.page++;
        res.send(`<h1 style='color:blue'> You have visited the page : ${req.session.page}`)
    }
    else {
        req.session.page = 1;
        res.send(`<h1 style='color:green'> Welcome! Thank you for visiting!`)
    }
}).listen(3435)