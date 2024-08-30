Download:-
(1) https://www.mongodb.com/try/download/shell
(2) https://www.mongodb.com/try/download/compass

After downloading "https://www.mongodb.com/try/download/shell", extract the file, then open file and click on "bin"
and then copy the exe files to "C" drive.

Steps to setup mongodb:-
(1) https://www.mongodb.com/
(2) Inside "Products" go to "Community Edition".
(3) Then click on "Download Community".

Now, open cmd and write "mongosh" and run.

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
(15) db.Student.find().limit(1) [it will limit no.of outputs]
(16) db.Student.find({name:"Dhairya"}).limit(1) [it will by default show 1st data of same names]
(17) db.Student.find({name:"Dhairya"}).limit(1).skip(1) [it will show 2nd data of same names]
(18) db.Student.updateOne({name:"Bhavin"}, {$set: {name:"Devarsh"}}) [to change content of data]
(19) db.Student.updateMany({name:"Dhairya"}, {$set: {Age:20}})
(20) db.Student.deleteOne({}) [it will by default delete first data]
(21) db.Student.deleteOne({Rollno:108}) [it will delete particular data]
(22) db.Student.deleteMany({}) [it will delete all the data]
(23) db.Student.find({name:"Dhairya"}).count() [it will count no.of records]
(24) db.Student.find().sort() [it will not sort]
(25) db.Student.find().sort({Age:-1}) [it will sort in descending]
(26) db.Student.find().sort({Age:1}) [it will sort in ascending]

// Comparision Operator
(27) $eq (equals to) => db.Student.find({Age: {$eq:20}}) [it will show data if age=20]
(28) $gt (greater than) => db.Student.find({Age: {$gt:20}}) [it will show data if age>20]
(29) $gte (greater than equal to) => db.Student.find({Age: {$gt:20}}) [it will show data if age>=20]
(30) $lt (less than) => db.Student.find({Age: {$lt:20}}) [it will show data if age<20]
(31) $lte (less than equal to) => db.Student.find({Age: {$lte:20}}) [it will show data if age<=20]
(32) $in => db.Student.find({Age: {$in:[20,25]}}) [it will show data where age=20 or age=25]
(33) $nin => db.Student.find({Age: {$nin:[20,25]}}) [it will show data other than where age=20 or age=25]
(34) $ne (not equal to) => db.Student.find({Age: {$ne:20}}) [it will show data if age!=20]

[Ques] update only one document with branch CSE and age 21
=> db.Student.updateOne({name:"Maanan"}, {$set: {branch:"CSE", Age:21}}, {upsert:true})

// Logical Operator
(35) $and => db.Student.find({$and: [{name:"Dhairya"}, {Age:20}]})
(36) $or => db.Student.find({$or: [{name:"Dhairya"}, {Age:20}]})
(37) $nor => db.Student.find({$nor: [{name:"Dhairya"}, {Age:20}]})
(38) $not => db.Student.find({Age: {$not: {$lt:20}}})

//Field Update Operator
(39) $inc (increment) => db.Student.updateMany({}, {$inc: {Age:10}}) [it will increase every age value by "10"]
(40) $mul => db.Student.updateMany({}, {$mul: {Rollno:10}}) [it will multiply every age value by "10"]
(41) $unset => db.Student.updateOne({name:"Maanan"}, {$unset: {branch:"CSE"}}, {upsert:true}) [it will remove that particular field]
(42) $rename => db.Student.updateMany({}, {$rename: {"Dhairya":"Zulfi"}})

// Cursor
(43) let rec = db.Student.find() after running this line then write:-
=> rec

// Regex
(44) db.Student.insertMany([{Rollno: 110, name: "Test", Age:20}, {Rollno: 111, name: "TEST", Age:22}, {Rollno: 112, name: "tesT", Age:24}, {Rollno: 113, name: "12test", Age:26}, {Rollno: 114, name: "Test123", Age:28}, {Rollno: 115, name: "Testing", Age:30}])
(45) db.Student.find({name: {$regex: /test/}})
(46) db.Student.find({name: {$regex: /test/i}}) [For case sensitive]
(47) db.Student.find({name: {$regex: /^test/}}) [Must start with 'test']
(48) db.Student.find({name: {$regex: /test$/}}) [Must end with 'test']
(49) db.Student.find({name: {$regex: /[0-9]$/}}) [Must end with '0-9]
(50) db.Student.find({name: {$regex: /^[0-9]/}}) or db.Student.find({name: {$regex: /^\d/}})
[Must start with '0-9]
(51) db.Student.find({name: {$regex: /^[0-9]+$/}}) [Only digits allowed]

(52) db.Student.updateMany({}, {$set: {join_date: new Date()}}) [To insert column] 
(53) db.Student.updateMany({}, {$unset: {join_date: ""}}) [To delete column]
(54) db.Student.find({}, {name: 1})

In VsCode:-
=> npm install mongoose
=> npm install express

(55) db.Student.find({Age: {$gt: 30}}).explain("executionStats")

// To create index (Single)
(56) db.Student.createIndex({Age: 1})

// To check index
(57) db.Student.getIndexes()

After this run point no. (55)

// To delete index
(58) db.Student.dropIndexes()

// To create index (Compound)
(59) db.Student.createIndex({Age: 1, name: -1})

// To create index (Partial)
(60) db.Student.createIndex({Age: 1}, {partialFilterExpression: {Age: {$gt: 30}}})
