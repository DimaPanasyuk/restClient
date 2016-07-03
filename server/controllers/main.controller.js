const User = require('../models/user');


exports.getAllUsers = (req, res, next) => {
  if (req.query.search) {
    const searchQuery = req.query.search.toLowerCase();
  }
  User.find({}).exec((err, users) => {    
    if (users) {
      if (searchQuery) {
        var searchResult = users.filter(user => user.name.toLowerCase().indexOf(searchQuery) > -1);
        if (searchResult) {
          res.send({
            status: true,
            users: searchResult
          });
        } else {
          res.send({
            status: true,
            users: []
          })
        }
      } else {
        res.send({
          status: true,
          users: users
        });
      }
    } else {
      res.send({
        status: false,
        message: 'No users found'
      });
    }
  });
};

exports.getInfoAboutUser = (req, res, next) => {
  const name = req.params.name;
  User.findOne({name: name}).exec((err, user) => {
    if (user) {
      res.send({
        status: true,
        user: user
      })
    } else {
      res.send({
        status: false,
        errorMessage: 'No user found'
      });
    }
  });
};

exports.createNewUser = (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (user) {
      res.send({
        status: true,
        user: user
      });
    } else {
      res.send({
        status: false,
        errorMessage: 'Error while creating user'
      });
    }
  });
};

exports.updateUserInfo = (req, res, next) => {
  User.update({name: user.name}, req.body).exec((err, status) => {
    if (status) {
      res.send({
        status: true
      });
    } else {
      res.send({
        status: false,
        errorMessage: 'Error while updating user'
      });
    }
  });
};

exports.updateUserSurname = (req, res, next) => {
  User.update({name: req.params.name}, req.body).exec((err, user) => {
    if (user) {
      res.send({
        status: true
      });
    } else {
      res.send({
        status: false,
        errorMessage: 'Error while updating user surname'
      });
    }
  });
};

exports.checkIfUserExists = (req, res, next) => {
  if (req.params.name) {
    User.findOne({name: req.params.name}).exec((err, user) => {
      if (user) {
        next();
      } else {
        res.send({
          status: false,
          errorMessage: 'No user found'
        });
      }
    });
  } else {
    res.send({
      status: false,
      errorMessage: 'specify user name for this action'
    });
  }
};

exports.removeUser = (req, res, next) => {
  User.remove({name: req.params.name}).exec((err) => {
    if (err) {
      res.send({
        status: false,
        errorMessage: 'Error while deleting user!'
      });
    } else {
      res.send({
        status: true
      });
    }
  });
};
