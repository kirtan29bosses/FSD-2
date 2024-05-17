const em = require('events')
const ee = new em()

var fun1 = (msg) => {
    console.log("Message from fun1: " + msg)
}
var fun2 = (msg) => {
    console.log("Message from fun2: " + msg)
}
ee.on('event1',fun1)
ee.on('event2',fun2)
ee.on('event1',fun1)
ee.on('event2',fun2)
ee.removeListener('event1',fun1)
ee.removeAllListeners('event2',fun2)
ee.emit('event1',"LJU");
ee.emit('event2',"RAJ");