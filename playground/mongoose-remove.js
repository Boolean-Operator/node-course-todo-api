const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// // Todo.remove
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

let id = "5af496ce948d9a080eca22ca";

// Todo.findOneandRemove
Todo.findOneAndRemove({_id: id}).then((result) => {
  console.log(result);
});

// // Todo.findByIdAndRemove
// Todo.findByIdAndRemove(id).then((todo) => {
//   console.log(todo);
// });
