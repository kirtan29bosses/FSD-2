// Write a express js script to pass data like: Message, Name & ID from express application to
// pug template in h1, h2 & h3 tag respectively and display data in browser.

var exp = require('express')
const app = exp()

app.set("view engine","pug")
app.get('/', function(req,res) {
    res.render(__dirname + "/PUG3.pug", {ID : 1, Name : "Raj", Message : "Hi!"})
});
app.listen(3435)