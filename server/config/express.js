const path = require('path');
const rootPath = path.normalize(__dirname + '/../');
const router = require('../routes/main.route');
const bodyParser = require('body-parser');

module.exports = (app) => {
  
  app.set('views', `${rootPath}/views`);
  app.set('view engine', 'jade');
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use('/api', router);
};