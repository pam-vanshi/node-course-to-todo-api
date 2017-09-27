const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoos.js')
const {Todo} = require('./../server/modles/todo.js');

Todo.remove({}).then((res) => {
  console.log(Todo.find());;
})
