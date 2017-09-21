//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if(err){
  return console.log("We are unable to connect to database server");
 }
 console.log("Connected to mongodb server");
 // db.collection('TODOS').find({_id : new ObjectID("59c340b579ffd211a2ece6b1")}).toArray().then((docs) => {
 //   console.log('TODOS');
 //   console.log(JSON.stringify(docs,undefined,2));
 // }, (err) => {
 //   console.log("Unable to print the data",err);
 // })

 // db.collection('TODOS').find().count().then((count) => {
 //   console.log('TODOS count');
 //   console.log(count);
 // }, (err) => {
 //   console.log("Unable to print the data",err);
 // })
 db.collection('User').find({age:22}).toArray().then((docs1) => {
   console.log('Users');
   console.log(docs1);
 }, (err) => { console.log(err);})
})
