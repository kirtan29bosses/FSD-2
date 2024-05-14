// [3.] Path

var pm = require("path")
path = pm.dirname("D:/B10_284/FSD-2/Unit-2/node/abc.txt")
console.log(path)

path1 = pm.basename("D:/B10_284/FSD-2/Unit-2/node/abc.txt")
console.log(path1)

path2 = pm.extname("D:/B10_284/FSD-2/Unit-2/node/abc.txt")
console.log(path2)

path3 = pm.parse("D:/B10_284/FSD-2/Unit-2/node/abc.txt")
console.log(path3)
console.log(path3.name)