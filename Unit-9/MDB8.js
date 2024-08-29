// Write a program to design a feedback form with name, email, feedback [dropdown]: Bad, Good, Vgood, Excelent
// Comments[textarea] and submit button.

var exp = require("express")
var app = exp()
const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/Login").then(()=>{console.log("Success")}).catch((err)=>{console.error(err)});

const myschema = new mg.Schema({
    username: {type: String,
        required: true,
    },
    password: {type: Number},
    email: {type: String},
    feedback: {type: String},
    comment: {type: String}
});

// To connect collection to schema
mg.pluralize(null) // without writing this it will create name of collection in plural form
const person = new mg.model("Feedback", myschema)

app.use(exp.static(__dirname,{index:'form2.html'}))
app.get('/process_get',function(req,res) {
    const personData = new person (
        {username: req.query.uname,
        email: req.query.email,
        feedback: req.query.feedback,
        comment: req.query.comment
        }
    )
    personData.save()
    res.send("Record inserted <br> <a href='/display_feedback'> Display Feedback </a>")
})

app.get("/display_feedback", async(req,res) => {
    const f = await person.find()
    res.write('<table border="1px solid"> <tr><th>Name</th><th>Email</th><th>Feedback</th><th>Comments</th></tr>')
    f.map((f1) => {
        res.write(`<tr><td>${f1.username}</td><td>${f1.email}</td><td>${f1.feedback}</td><td>${f1.comment}</td></tr>`)
    })
    res.send('</table>')
})

app.listen(3435)