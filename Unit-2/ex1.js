// Write a node js script to create 2 listner for a common event

const em = require('events')
const ee = new em()

var listner1 = (msg) => {
    console.log("Listner-1 executed")
}
var listner2 = (msg) => {
    console.log("Listner-2 executed")
}

ee.on("event1",listner1)
ee.on("event1",listner2)
let count1 = ee.listenerCount("event1")
console.log("No.of listner: " + count1)
ee.emit('event1');
let count2 = ee.listenerCount("event1")
console.log("No.of listner: " + count2)
ee.removeListener('event1',listner2)
ee.emit('event1')
let count3 = ee.listenerCount("event1")
console.log("No.of listner: " + count3)