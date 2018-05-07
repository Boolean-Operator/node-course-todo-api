const mongoose = require('mongoose');

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});


//
// newUser.save().then((doc) => {
//   console.log('New user saved');
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('There was a problem with the last itme', e);
// });


module.exports = {User};
