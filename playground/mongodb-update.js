const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server...update');

  // findOneAndUpdate

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aeb58acf98b63a7859443ac')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  //

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aeaf603c8acc32bb0c9e147')
  }, {
    $set: {
      name: 'Logan'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });






  // db.close();

});
