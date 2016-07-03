const mongoose = require('mongoose');
const usersModel = require('../models/user');

module.exports = () => {
  mongoose.connect('mongodb://localhost/rest');
  const db = mongoose.connection;
  db.on('open', () => {
    console.log('<--- ----- ---- Database is ready, captain! ---- ----- --->');
  });
  db.on('error', (err) => {
    console.log(err);
  });
  (() => {
    usersModel.find({}).exec((err, users) => {
      if (users.length === 0) {
        usersModel.create({name: 'Dima', surname: 'Panasyuk', age: 18});
        usersModel.create({name: 'Nazar', surname: 'Shimko', age: 19});
        usersModel.create({name: 'Anya', surname: 'Kushik', age: 19});
      }
    });
  })();
};