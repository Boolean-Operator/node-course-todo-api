const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// // Todo Id
let idTD = '5af0c3de899b923416334992';

// User id
let idU = '5af078e40d65c72c27fd7bfe';


if(!ObjectID.isValid(idTD)) {
  console.log('Todo ID not valid');
};

if(!ObjectID.isValid(idU)) {
  console.log('User ID not valid');
};


// Todo.find({
//   _id: idTD
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: idTD
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

Todo.findById(idTD).then((todo) => {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by Id: ', todo);
}).catch((e) => console.log(e));


// Q Users collection
// User.findById
// - User not found
// - User found, print to screen
// - Handle any errors


User.findById(idU).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User: ', user);
}).catch((e) => console.log(e.message));
