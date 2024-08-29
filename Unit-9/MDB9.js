var exp = require("express")
var app = exp()
const mg = require("mongoose")
const cors = require("cors")

app.use(cors())
app.use(exp.json())

mg.connect("mongodb://127.0.0.1:27017/Login").then(()=>{console.log("Success")}).catch((err)=>{console.error(err)});

const myschema = new mg.Schema({
    username: {type: String,
        required: true,
    },
});

// To connect collection to schema
mg.pluralize(null) // without writing this it will create name of collection in plural form
const person = new mg.model("Signup", myschema)

app.post('/Signup', async(req,res) => {
    try {
        const {username} = req.body;
        const newUser = new person({username})
        await newUser.save();
        res.send()
    }
    catch(error) {
        res.send(error)
    }
})

app.listen(3000)