const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoos.js')
const {Todo} = require('./../server/modles/todo.js');

// Todo.remove({}).then((res) => {
//   console.log(res);;
// })


Todo.findByIdAndRemove('59cb07432c9540201b022db8').then((todos) => {
  console.log(todos);
})
