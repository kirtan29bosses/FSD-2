var exp = require('express')
const app = exp()

app.set("view engine","pug")
app.get('/', function(req,res) {
    res.render(__dirname + "/PUG2.pug")
})
app.get('/data', function(req,res) {
    res.set("content-type","text/html");
    res.write("Name : " + req.query.name + "<br>")
    res.write("Email : " + req.query.email)
    res.send()
})
app.listen(3435)