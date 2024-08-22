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

// To update document
const updateDoc = async(name, update) => {
    try {
        const result = await person.updateOne({name}, update, {upsert:true}) // person.updateOne(filter, update, options)
        console.log(result)
    }
    catch(err) {
        console.log("Error occured")
    }
}

const updateDocById = async(_id, update) => {
    try {
        const result = await person.updateOne(_id, update, {upsert:true}) // person.findByIdAndUpdate(_id, update)
        console.log(result)
    }
    catch(err) {
        console.log("Error occured")
    }
}

const deleteDocById = async(_id) => {
    try {
        const result = await person.findByIdAndDelete(_id) // person.findByIdAndDelete(_id)
        console.log(result)
    }
    catch(err) {
        console.log("Error occured")
    }
}

// updateDoc('Meet', {age:19, active:false})
// updateDocById('66c6b61129a4952875305024', {age:25, active:true})
// deleteDocById('66c6c473ab1486c04f5a212c')