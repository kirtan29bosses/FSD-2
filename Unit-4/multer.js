var exp = require('express')
var multer = require('multer')
const app = exp()

app.set("view engine","pug")
app.get('/', function(req,res) {
    res.sendFile(__dirname + "/multer.html")
})
var storage = multer.diskStorage({
    destination: "Tennis",
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload = multer({storage: storage})
app.post('/uploadfile', upload.single('pic'), function(req,res) { 
    // to allow multiple files write "upload.array('pic',5)"
    // "pic" is in form tag
    res.set("content-type","text/html");
    res.sendFile(__dirname + "/multer.html")
    const file = req.file
    if(file){
        res.send("<h1> File: " + file.originalname + " has been uploaded in " + file.destination + " folder")
    }
    else {
        res.send("File not found!")
    }
})
app.listen(3435)