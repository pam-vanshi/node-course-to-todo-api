//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if(err){
  return console.log("We are unable to connect to database server");
 }
 console.log("Connected to mongodb server");

/*db.collection('TODOS').insertOne({
  text: "Something to do",
  completed: false
} , (err, result) => {
  if(err){ console.log("Unable to add the data",err);}
   console.log(JSON.stringify(result.ops, undefined, 2));
})*/
db.collection('User').insertOne({
  name: 'pramudit',
  age: 21,

  location: 'Roorkee'
}, (err, results) => {
if(err){console.log("Unable to insert data");}

console.log(results.ops[0]._id.getTimestamp());
})
 db.close();
})
