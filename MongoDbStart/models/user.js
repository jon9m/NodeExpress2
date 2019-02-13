
const getDb = require('../util/database').getDB;
const mongodb = require('mongodb');

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  save() {
    const db = getDb();

    db.collection('users').insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  }

  static findById(userId) {
    const db = getDB();

    return db.collection('users').find({ _id: mongodb.ObjectID(userId) })
      .next()
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => console.log(err));
  }
}

module.exports = User;