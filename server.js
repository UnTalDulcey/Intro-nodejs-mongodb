//server http
var express = require('express');
var logger = require('./logger');


//creamos nuestra app y el puerto por el que escuchará
var app = express();
var port = 3000;

//le decimos a nuestra app que empiece a escuchar por el puerto en la variable port
app.listen(port, function(){
  logger.info('Express server listening on http://localhost:%s/', port);
});