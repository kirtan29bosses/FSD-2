Download:-
(1) https://www.mongodb.com/try/download/shell
(2) https://www.mongodb.com/try/download/compass
(3) Open cmd and write "mongosh" and run.

Steps to setup mongodb:-
(1) https://www.mongodb.com/
(2) Inside "Products" go to "Community Edition".
(3) Then click on "Download Community".

After running cmd:-
(1) test> showdbs
(2) test> use admin [to create database]
(3) admin> show collections
(4) db.createCollection("Student")
(4) db.createCollection("Faculty")
(5) db.Faculty.drop() [to delete database]
(6) db.Student.insertOne({Rollno: 284, name: "Raj"}) [this is used to insert single data]
(7) db.Student.insertMany([{Rollno: 102, name: "Kishor"}, {Rollno: 103, name: "Bhavin"}, {Rollno: 104, name: "Kirtan"}, {Rollno: 105, name: "Pratham"}]) [this is used to insert multiple data]
(8) db.Student.insert({Rollno: 106, name: "Dhairya", Age: 19, Contact: 9455163218})
(9) db.Student.find() [to show data in cmd]
(10) db.Student.find({name: "Kirtan"})
(11) db.Student.find({Rollno: 105})
(12) db.Student.remove({name: "Kishor"})
(13) db.Student.find({Rollno: 106}, {id: false, Age: false, Rollno: false}) [to display selected output]
(14) db.Student.findOne({name: "Dhairya"}) [if there are multiple same data]

After downloading "https://www.mongodb.com/try/download/shell", extract the file, then open file and click on "bin"
and then copy the exe files to "C" drive.
