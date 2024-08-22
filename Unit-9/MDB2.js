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

// To create multiple document
const createDoc = async() => {
    try {
        const personData1 = new person (
            {name:"Meet",
            surname:"Patel",
            age: 20,
            active: true,
            }
        );
        const personData2 = new person (
            {name:"Hiral",
            surname:"Patel",
            age: 20,
            active: true,
            }
        );
        const personData3 = new person (
            {name:"Stuti",
            surname:"Patel",
            age: 20,
            active: true,
            }
        )
        const result = await person.insertMany([personData1,personData2,personData3])
        console.log(result)
    }
    catch(err) {
        console.log("Error occured")
    }
}

createDoc()