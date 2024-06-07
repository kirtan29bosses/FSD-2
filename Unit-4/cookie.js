// npm install cookie-parser

const cp = require('cookie-parser')
const exp = require('express')
const app = exp()

app.use(cp())
app.get('/cookie', function(req,res) {
    res.cookie('Name','Raj');
    res.cookie('ID','2', {expires: new Date(Date.now() + 10000)}); // Refresh to see the ID after 10sec
    res.cookie('Email','rajpatel@gmail.com');
    res.send(req.cookies);
}).listen(3435);

// Browser -> ">>" -> Application -> Cookies -> http://localhost:3435