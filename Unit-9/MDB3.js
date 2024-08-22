const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/FSD").then(()=>{console.log("Success")}).catch((err)=>{console.error(err)});

const myschema = new mg.Schema({
    name:{type: String,
        required: true,
    },
    surname: String,
    age: Number,
    active: Boolean,
    date: {
        type: Date,
        default: new Date(),
    }
});

// To connect collection to schema
mg.pluralize(null) // without writing this it will create name of collection in plural form
const person = new mg.model("Raj", myschema)

// To create multiple document using array
const createDoc = async() => {
    try {
        const personData = [
            {name:"Dhruv",
            surname:"Patel",
            age: 20,
            active: true,
            },
            {name:"Aman",
            surname:"Patel",
            age: 20,
            active: true,}
        ]
        const result = await person.insertMany(personData)
        console.log(result)
    }
    catch(err) {
        console.log("Error occured")
    }
}

createDoc()