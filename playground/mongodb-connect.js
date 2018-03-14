const {MongoClient, ObjectID} = require('mongodb');

var obj = ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').find({
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos');
  });

  db.close();
});
