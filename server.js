//server http
var express = require('express');
var logger = require('./logger');
var bodyParser = require('body-parser');

//creamos nuestra app y el puerto por el que escuchará
var app = express();
var port = 3000;

//nos permite parsear las peticiones como json
app.use(bodyParser.json('application/json'));

//middleware para permitir post
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//configuración de mongo
var mongoose = require('mongoose');
var config   = require('./config');
mongoose.connect(config.MONGO_URL);

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

infodb = [];
id = 0;
//
app.post('/info', function(req, res) {
    logger.info('POST', req.body);

    var infoNueva = req.body.info;
    infoNueva.id = id+=1;
    infodb[infoNueva.id] = infoNueva;

    res.set('Content-Type','application/json');
    res.status(201);

    res.json(
        {info: infodb[infoNueva.id]
    });
});


app.get('/cines', function(req, res){
    logger.info('GET /cines');
    var cine = require('./cinemodel');    

    cine.find({}, function(err, data){
        console.log(data);
        res.json(data);
    });
});

app.get('/test', function(req, res){
    logger.info('GET Test');
    var cine = require('./cinemodel');

    cine.create({
        ciudad: "Villavicencio",
        cines: [
            {
                nombre: "Cine Colombia",
                direccion: "viva CC",
                telefono: "6600000",
                peliculas: [
                    {
                        nombre: "el rey león",
                        hora: "6 AM",
                        imagen: "http://www.adisney.com/personajes/reyleon/img/mufasaysimba.jpg"
                    },
                    {
                        nombre: "el rey león",
                        hora: "6 AM",
                        imagen: "http://www.adisney.com/personajes/reyleon/img/mufasaysimba.jpg"
                    }                                        
                ]
            },
           { 
                nombre: "Cine Marandua",
                direccion: "centro",
                telefono: "6600000",
                peliculas: [
                    {
                        nombre: "el rey león",
                        hora: "6 AM",
                        imagen: "http://www.adisney.com/personajes/reyleon/img/mufasaysimba.jpg"
                    },
                    {
                        nombre: "el rey león",
                        hora: "6 AM",
                        imagen: "http://www.adisney.com/personajes/reyleon/img/mufasaysimba.jpg"
                    }                                        
                ]
            }
        ]
    }, function(err, newcine){
        if(err) console.log("Error en creación"+ err);
        res.json(newcine);
    });

});


//le decimos a nuestra app que empiece a escuchar por el puerto en la variable port
app.listen(port, function(){
  logger.info('Express server listening on http://localhost:%s/', port);
});