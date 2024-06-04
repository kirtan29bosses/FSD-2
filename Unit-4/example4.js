// Create HTML file which contain 2 number type input field, one drop down which contain option
// like add, sub, mul, div and a submit button. The input field must contain value greater than
// 0 else it will give a message "Please enter valid number". Also user must select from the
// drop down else give a message "You have not selected any option", message will be displayed
// on "/calc" page. If option is selected from drop down & numbers are entered then respective
// calculation will be performed on the "/calc" page. Use 'get' method to request data.

var exp = require('express')
var app = exp();

app.use(exp.static(__dirname,{index:'example4.html'}))
app.get('/calc',function(req,res) {
    n1 = parseInt(req.query.fno)
    n2 = parseInt(req.query.lno)
    if((n1 > 0) && (n2 > 0)) {
        if(req.query.select_name == 'Add') {
            a = n1 + n2
            res.write("Addition is = " + a)
        }
        else if(req.query.select_name == 'Sub') {
            a = n1 - n2
            res.write("Subtraction is = " + a)
        }
        else if(req.query.select_name == 'Mul') {
            a = n1 * n2
            res.write("Multiplication is = " + a)
        }
        else if(req.query.select_name == 'Div') {
            a = n1 / n2
            res.write("Division is = " + a)
        }
        else {
            res.write("You have not selected any option")
        }
    }
    else {
        res.write("Please enter valid number")
    }
    res.send()
}).listen(3435)