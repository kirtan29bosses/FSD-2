// Write a data to file, apending a data to file and reading the file data using callback

var ps = require('fs')
// ps.writeFile("node/abc.txt","Hej!", (err) => {if(err){console.log("Completed!")}})

// ps.appendFile("node/abc.txt"," Jag heter Roger Federer", (err) => {if(err){console.log("Updated!")}})

ps.readFile("node/abc.txt", (err,data) => {if(err){console.log(err)}console.log(data.toString())});
console.log("File Operation Completed!")