const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server...');

  // db.collection('Todos').insertOne({
  //   text: 'Something else to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert item', err);
  //   }
  //   console.log('Added one record');
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  db.collection('Users').insertOne({
    name: 'Logan Todd',
    age: 1,
    location: 'Reno, NV'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert record', err);
    }
    console.log('Added new record');
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();

});
