const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

// CRUD
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});


// app.get('/todos/:id', (req, res) => {
//   var id = req.params.id;
//   console.log('id: ', id);
//   if(ObjectID.isValid(id)) {
//     Todo.findById(id).then((todo) => {
//       if(!todo) {
//         console.log('Id not found');
//         res.status(400).send();
//       } else {
//         res.send({todo});
//         console.log('Todo by Id: ', todo);
//       };
//     }).catch((e) => console.log(e));
//   } else {
//     console.log('Todo ID not valid');
//     res.status(404).send();
//   };
// });


app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    console.log('Invalid');
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      console.log('Not found');
      return res.status(404).send();
    }
    console.log('body.todo sent');
    res.send({todo: todo});
  }).catch((e) => {
    console.log('Catch');
    res.status(400).send();
  });

});




app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});


module.exports = {app: app};
