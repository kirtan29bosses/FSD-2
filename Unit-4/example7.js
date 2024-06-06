var exp = require('express')
var app = exp();

const cb = (req, res, next) => {
    console.log('Initialized');
    res.set("content-type","text/html")
    res.write("<strong> First </strong>")
    next();
}

const cb1 = (req, res, next) => {
    // res.set("content-type","text/html")
    res.write("<p> Addition = " + (5+5) + "</p>")
    next();
}
app.use('/ee', cb, cb1);
app.get('/ee',function(req,res) {
    // res.set("content-type","text/html");
    res.write("<h1> Hello Welcome to LJU </h1>");
    res.send()
});
app.listen(3435)