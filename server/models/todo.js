const mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});


//
// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Save item', doc);
// }, (e) => {
//   console.log('Unable to save todo item');
// });

module.exports = {Todo};
