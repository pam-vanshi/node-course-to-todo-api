const express = require('express')
const bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoos.js');
var {Todo} = require('./modles/todo.js')
var {User} = require('./modles/User.js')

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















app.listen(3000, () => {
  console.log("starting on port 3000");
})
