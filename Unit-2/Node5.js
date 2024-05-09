// setTimeout(() => {console.log("This message is shown after 3 sec")},3000});

// setTimeout(function() {console.log("This message is shown after 3 sec")},3000);

// setTimeout(myfun,3000)
// function myfun() {
//     console.log("This message is shown after 3 sec")
// }

let c = 0
setInterval(function() {
    if(c<=10) {
        console.log(c++)
    }
},3000);