// Create a JSON object 'shape' which contain array of object. Calculate perimeter of square &
// circle by using side value & diameter respectively. Write object as well as perimeter value
// of square & circle in in 'shape.txt'

const shape = [
    {
        name: "Circle",
        diameter: 20
    },
    {
        name: "Square",
        side: 10
    }
]

var ps = require("fs")

// ps.writeFileSync("node/shape.txt",JSON.stringify(shape))

var cperi = 2*3.14*shape[0].diameter/2
var speri = 4*shape[1].side

// ps.appendFileSync("node/shape.txt", "Perimeter of Circle:"+speri+"\n")

data = ps.readFileSync("node/shape.txt","utf-8")
console.log(data)