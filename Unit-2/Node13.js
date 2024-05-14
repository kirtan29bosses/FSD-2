// [2.] Operating System [OS]

var ps = require("fs")
var os = require("os")

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
f = os.tmpdir()
// ps.mkdirSync(f+"/AA");

fm = os.freemem()/1024/1024/1024 // --> 
console.log(fm);

// if(fm>1) {
//     ps.writeFileSync(f+"/AA/temp.txt","There is sufficient memory!")
// }
console.log(ps.readFileSync(f+"/AA/temp.txt","utf-8"))