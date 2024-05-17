// Events Module

const em = require('events')
const ee = new em()
ee.on('end',() => 
    {
    console.log("Event Ended!")
    ee.emit('start',10,20)
    });
ee.on('start',(start,end) => {console.log("Event Started! " + `${start},` + `${end}`)});
// ee.emit('start',10,20)
ee.emit('end')