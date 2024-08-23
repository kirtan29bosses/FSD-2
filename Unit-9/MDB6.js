const mg = require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/Validation").then(()=>{console.log("Success")}).catch((err)=>{console.error(err)});

const myschema = new mg.Schema({
    username: {type: String,
        required: [true, 'Username is required'],
        minlength: [4, 'Username not less than 4'],
        maxlength: [20, 'Username not more than 20'],
        trim: true,
        uppercase: true,
    },
    email: {type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email should be unique'],

        // To check if email id is valid or not
        validate(val) {
            if(!v.isEmail(val)) {
                throw new Error("Enter valid email id!")
            }
        }
    },
    age: {type: Number,
        required: [true, 'Age is required'],
        // min: 18,
        // max: 65,

        // To check if age is +ve or not
        validate(val) {
            if(val < 0) {
                throw new Error("Age should be positive")
            }
        }
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User',
    }
});

// To connect collection to schema
mg.pluralize(null) // without writing this it will create name of collection in plural form
const person = new mg.model("User", myschema)

// To find document
const findDoc = async(age) => {
    try {
        // const result = await person.find({age: {$gt: 20}})
        // const result2 = await person.find({age: {$gt: 20}}, {username:1, _id:0})
        // const result3 = await person.find({age: {$in: [0,20]}})
        // const result4 = await person.find().sort({age: -1})

        // Alternate method to find document
        const result = []
        result.push((await person.find({age: {$gt: 20}})))
        result.push((await person.find({age: {$gt: 20}}, {username:1, _id:0})))
        result.push((await person.find({age: {$in: [0,20]}})))
        result.push((await person.find().sort({age: -1})))
        console.log(result)
        // console.log(result[0]) --> result[1], result[2], result[3]
    }
    catch(err) {
        console.log(err)
    }
}

findDoc()