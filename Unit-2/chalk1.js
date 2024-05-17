// npm install chalk

// Now make changes in 'package.json' file as below
// {
//     "type":"module",
//     "dependencies": {
//       "chalk": "^5.3.0"
//     }
// }  

import ch from "chalk"

const log = console.log
log("LJU")
log("Hello " + ch.bgCyan("LJU") + " GM")
log(ch.redBright.underline.bgYellowBright("Hello") + " " + ch.blackBright.bold.bgWhiteBright("Welcome"))