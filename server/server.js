const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')
var {authenticate} = require('./middleware/authenticate');

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

app.patch('/user/:id', (req,res) => {
  var id = req.params.id;
  var body = _.pick('req.body', ['text','completed'])
  if(!ObjectID.isValid(id)){
    return res.status(400).send("Id is not valid")
  }
  if(_.isBoolean(body.completed) & body.completed){
    body.completedAt = new Date().getTime()
  }
  else{
    body.completed = false,
    body.completedAt = null
  }
  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo){res.send('there is no todo')}
    res.send(todo)
  }, (err) => {
    res.status(400).send()
  })

})


app.post('/user', (req,res) => {
  var body = _.pick(req.body, ['name','email','password'])
  var user = new User({
    name: body.name,
    email: body.email,
    password: body.password

  })
  user.save().then((user) => {
     return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth',token).send(user)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

//app.get('/user/me', (req,res) => {
 //  // User.find().then((users) => {
 //  //   res.send({users})
 //  // })
 //  var token = req.header('x-auth')
 //  User.findByToken(token).then((user) => {
 //    if(!user){
 //      return Promise.reject()}
 //    res.send(user)
 //  }).catch((e) => {
 //    res.status(400).send();
 //  })
 // })
 app.get('/user/me', authenticate, (req, res) => {
   res.send(req.user);
 });




module.exports = {
  app
}















app.listen(port, () => {
  console.log("starting on port" + port);
})
