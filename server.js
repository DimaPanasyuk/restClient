const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

const router = require('./server/routes/main.route');




require('./server/config/mongoose')();
require('./server/config/express')(app);
require('./server/config/routes')(app);

console.log(`<--- ----- ---- Flying over port ${port} ---- ----- --->`);
app.listen(port);