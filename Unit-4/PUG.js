// npm install pug
// No need to run the program again, just refresh after making changes in '.pug' file 

var exp = require('express')
const app = exp()

app.set("view engine","pug")
app.get('/', function(req,res) {
    res.render(__dirname + "/PUG.pug")
}).listen(3435)