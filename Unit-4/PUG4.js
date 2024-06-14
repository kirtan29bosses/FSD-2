// Write a express js script using pug file which contain following fields: Name, email, course(CSE,CE,IT)
// Once a form submit data should be display on 'data' page using pug file i.e data should be
// submited from express application to pug file.

var exp = require('express')
const app = exp()

app.set("view engine","pug")
app.get('/', function(req,res) {
    res.render(__dirname + "/PUG4.pug")
});
app.get('/data', function(req,res) {
    res.render(__dirname + "/pug_template.pug",{name:req.query.name, email:req.query.email, course:req.query.course})
})
app.listen(3435)