const express = require('express');
const router = express.Router();
const main = require('../controllers/main.controller');

router.use((req, res, next) => {
  const d = new Date();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  console.log(`New ${req.method.toUpperCase()} request at '${req.url}' - ${hour}:${minutes}:${seconds}`);
  next();
});

router.get('/users', main.getAllUsers);
router.get('/users/:name', main.checkIfUserExists, main.getInfoAboutUser);
router.post('/users', main.createNewUser);
router.put('/users/:name', main.checkIfUserExists, main.updateUserInfo);
router.patch('/users/:name', main.checkIfUserExists, main.updateUserSurname);
router.delete('/users/:name', main.checkIfUserExists, main.removeUser);

module.exports = router;