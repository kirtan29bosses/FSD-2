// You have to develop a user feedback for a website using express js.
// Create a form with foll feild: Name, Email, Message, Rating(bad, avg, good, v.good, excelent).
// When user submit the form, store their feedback info in a cookie named 'feedback' which expires
// in 10sec. Display confirmation msg to user after successfuly submiting the form & create
// a link named 'show feedback' to display the feedback details stored in 'feedback' cookie.
// When user click to the link retirve the feedback info from the cookie & display it on page
// which also include a link on feedback details page to logout.

var exp = require('express')
const cp = require('cookie-parser')
const app = exp()

app.use(exp.urlencoded())
app.use(cp())
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/cookie3.html');
    res.set("content-type","text/html");
    app.post('/submit_feedback', function(req,res) {
        const {name,email,message, rating} = req.body
        const feedback = {name,email,message, rating};
        res.cookie('FB', feedback, {maxAge:10000})
        res.send("<a href='/feedback_details'> SHOW FEEDBACK </a>")
    })
})

app.get('/feedback_details', function(req,res) {
    const feedback = req.cookies.FB;
    if(feedback) {
        res.send(`<h1> Feedback Details </h1> <p> <strong> Name: </strong> ${feedback.name}</p> <br> <p> <strong> Email: </strong> ${feedback.email}</p> <br> <p> <strong> Massage: </strong> ${feedback.message}</p> <br> <p> <strong> Rating: </strong> ${feedback.rating}</p>`);
    }
    else {
        res.send(`No feedback found <br> <a href="/"> LOGOUT </a>`)
    }
})
app.listen(3435)