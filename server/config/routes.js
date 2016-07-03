const main = require('../controllers/main.controller');


module.exports = (app) => {
  
  //app.get('/', main.simpleGet);
  app.get('/:partialPath/:partialName', (req, res, next) => {
    res.render(`../../public/app/${req.params.partialPath}/${req.params.partialName}`);
  });
  app.get('*', (req, res, next) => {
    res.render('index');
  });
};