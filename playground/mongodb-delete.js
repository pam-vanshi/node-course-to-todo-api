//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if(err){
  return console.log("We are unable to connect to database server");
 }
 console.log("Connected to mongodb server");

// //deleteMany
//  db.collection('TODOS').deleteMany({text: 'eat lunch'}).then((result) => {
//    console.log(resul);
//  });

//deletOne

// db.collection('TODOS').deleteOne({text: 'loduuuuuuuuuuuuuuu'}).then((result) => {
//   console.log(result.result);
// })

//findOneAndDelete

//db.collection('TODOS').findOneAndDelete({completed: false}).then((result) => {
  //console.log(result);
//})
db.collection('User').deleteOne({name: 'pramudit2'}).then((result) => {
  console.log(result.result);
});

})
