// Write a node Js script to create a folder "xyz" at "Temp" folder. Also create file name test.txt in "xyz" folder
// and now check platform is "win32" or not and print the msg accor.

var ps = require("fs")
var os = require("os")

f = os.tmpdir()
// ps.mkdirSync(f+"/XYZ")
pf = os.platform()
if(pf=="win32") {
    ps.writeFileSync(f+"/XYZ/test.txt","The Current platform is "+pf)
}