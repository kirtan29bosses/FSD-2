// Write a express js script to print message in next line split by ".". Use 'get' method to submit
// data. HTML file contain form of text area for the message and submit button. HTML file should be in frontend
// folder & js file should be in backend folder.

var exp = require('express')
var pm = require('path')
var app = exp();

const sp = pm.join(__dirname, "../frontend")
app.use(exp.static(sp,{index:'example3.html'}))
app.listen(3435)
app.get('/login',function(req,res) {
    res.set("content-type","text/html");
    data = req.query.text.split(".")
    for(i=0; i<data.length; i++) {
        res.write(data[i] + "</br>")
        console.log(data[i])
    }
    res.send()
}).listen(4753)