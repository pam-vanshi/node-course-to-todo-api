//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if(err){
  return console.log("We are unable to connect to database server");
 }
 console.log("Connected to mongodb server");

 db.collection('User').findOneAndUpdate({
    name: 'pramudit2'
  }, {
    $set: {
      name: 'pramudit',
      age: 20
    }}, {
      returnOriginal: false
    }).then(result) => {
    console.log(result);
  }

});
