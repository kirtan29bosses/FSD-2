var exp = require("express")
var app = exp()
const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/Login").then(()=>{console.log("Success")}).catch((err)=>{console.error(err)});

const myschema = new mg.Schema({
    username: {type: String,
        required: true,
    },
    password: {type: Number}
});

// To connect collection to schema
mg.pluralize(null) // without writing this it will create name of collection in plural form
const person = new mg.model("Data1", myschema)

app.use(exp.static(__dirname,{index:'form.html'}))
app.get('/process_get',function(req,res) {
    const personData = new person (
        {username: req.query.uname,
        password: req.query.pass,
        }
    )
    personData.save()
    res.send("Record inserted")
}).listen(3435)