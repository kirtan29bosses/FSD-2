// Mongoose Schema Validators
// 1) required
// 2) min and max [for numbers]
// 3) enum
// 4) minlength and maxlength [for string]
// 5) trim
// 6) uppercase and lowercase
// 7) default
// 8) validate
// 9) unique

// npm install validator

// Ques. Define a user schema that includes various validation rules to ensure data integrity and consistency.
// 1.] username: It must be required & it must be between 4-20 characters long. It should be trimed white spaces.
// It should be converted to uppercase before saving.

// 2.] email: It must require & must be unique accross the collection.

// 3.] age: It must be a no. bet 18-65.

// 4.] role: Must be either user or admin. Should default to user if not provided.

const mg = require("mongoose")
const v = require("validator")
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

// To create document
const createDoc = async() => {
    try {
        const personData = new person (
            {username: "Krish Patel",
            email: "krish2012@gmail.co",
            age: -1,
            role: 'Admin',
            }
        )
        const result = await personData.save()
        console.log(result)
    }
    catch(err) {
        console.log(err)
    }
}

createDoc()