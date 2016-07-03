const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {type: String, unique: true},
  surname: String,
  age: Number
});

module.exports = mongoose.model('User', userSchema);