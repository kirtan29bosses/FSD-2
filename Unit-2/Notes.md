PS D:\B10_284\FSD-2> node
Welcome to Node.js v18.16.0.
Type ".help" for more information.
> 1
1
> 1+3
4
> 1+(2*3)-4
3
> x = 10
10
> var y = 20
undefined
> x+y
30
> console.log("Hello")
Hello
undefined
--------------------------------------
* Multiline Expression:
> var x = 0
undefined
> do {
... x++;
... console.log(x)
... }
... while(x<5);
1
2
3
4
5
undefined
--------------------------------------
> var x = 20
undefined
> var y = 30
undefined
> x+y
50
> var sum = _
undefined
> console.log(sum)
50
undefined
> var p = 20
undefined
> var q = 30
undefined
> p + _
NaN
> var p = 20
undefined
> q = 30
30
> p + _
50
---------------------------------------
>  .save Node1.js
Session saved to: Node1.js
---------------------------------------
> .load Node1.js
---------------------------------------
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
const fun=(a,b) => {
console.log("Hello")
return a+b;
}
console.log("Addition: ", fun(10,20));
Hello
Addition:  30
undefined

> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
var t = 55
do {
t++
console.log(t);
}
while(t<=60)
56
57
58
59
60
61
undefined
----------------------------------------
> repl.repl.ignoreUndefined=true (For removing undefined word)
> repl.repl.ignoreUndefined=false (For getting undefined word)
----------------------------------------
> Press ctrl+D to get out of node
