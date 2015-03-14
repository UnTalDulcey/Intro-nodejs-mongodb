//server http
var express = require('express');
var logger = require('./logger');
var bodyParser = require('body-parser');

//creamos nuestra app y el puerto por el que escuchará
var app = express();
var port = 3000;

//nos permite parsear las peticiones como json
app.use(bodyParser.json('application/json'));

//ruta inicial
app.get('/', function(req, res) {
  
  logger.info('GET /');

  res.json({
    hola: "hola!"
  })

});

//ruta inicial con parámetro
app.get('/alguien/:nombre', function(req, res) {
  
  logger.info('GET /%s', req.params.nombre);
  res.json({
    hola: req.params.nombre
  })

});


//le decimos a nuestra app que empiece a escuchar por el puerto en la variable port
app.listen(port, function(){
  logger.info('Express server listening on http://localhost:%s/', port);
});