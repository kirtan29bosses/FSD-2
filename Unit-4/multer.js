var exp = require('express')
var ml = require('multer')
const app = exp()

app.set("view engine","pug")
app.get('/', function(req,res) {
    res.sendFile(__dirname + "/multer.html")
})
app.post('/', function(req,res) {
    res.sendFile(__dirname + "/multer.html")
})
app.listen(3435)