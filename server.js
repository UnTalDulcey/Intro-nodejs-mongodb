//server http
var express = require('express');

//creamos nuestra app y el puerto por el que escuchará
var app = express();
var port = 3000;

//le decimos a nuestra app que empiece a escuchar por el puerto en la variable port
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});