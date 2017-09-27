const express = require('express')
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')

var {mongoose} = require('./db/mongoos.js');
var {Todo} = require('./modles/todo.js')
var {User} = require('./modles/User.js')
const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json())

app.post('/todos', (req,res) => {
    var todo = new Todo({
      text: req.body.text
    });

    todo.save().then((docs) => {
      res.send(docs);
    }, (e) => {
      res.status(400).send(e);
    })
})

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  })
})


app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(400).send("Id is not valid")
  }

    Todo.findById(id).then((todo) => {
      if(!todo){res.status(400).send("There is no todo");}
      res.send(todo);
    }, (e) => {
          res.status(400).send("Item is not found");
    })

//  else {res.status(400).send("Id is not valid")};
})

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(400).send("Id is not valid")
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){res.status(400).send("There is no todo")};
    res.send(todo)
  }, (e) => {
        res.status(400).send("Item is not found");
  })
})








module.exports = {
  app
}















app.listen(port, () => {
  console.log("starting on port" + port);
})
