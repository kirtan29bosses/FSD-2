// Write a node js script to handle event of write a data in file, append data in file & read
// the file and display the data in console.

var ps = require('fs')
const em = require('events')
const ee = new em()

ee.on("data-write",function()
{
    ps.writeFile("ex3.txt","Hello ",(err) => {
        // console.log(err)
    });
    console.log("Data written in file")
});

ee.on("data-append",function()
{
    ps.appendFile("ex3.txt","Good Morning",(err) => {
        // console.log(err)
    });
    console.log("Data appended in file")
});

ee.on("data-read",function()
{
    ps.readFile("ex3.txt","utf-8",(err,data) => {
        if(err) {
            // console.log(err)
        }
        else {
            console.log(data)
        }
    });
    console.log("Data readed in file")
});

ee.emit("data-write")
ee.emit("data-append")
ee.emit("data-read") 