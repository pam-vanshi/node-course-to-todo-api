const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoos.js')
const {Todo} = require('./../server/modles/todo.js');

var id = "59c3f69796d8e72e998e847c154"

if(!ObjectID.isValid(id)){
  console.log('ID is not valid');
}

// Todo.find({
//   _id:id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
// Todo.findOne({
//   completed: false}).then((todo) => {
//     console.log(todo);
//   })
  Todo.findById(id).then((todo) => {
    console.log(todo);
  }).catch((e) => {
    console.log(e);
  })
