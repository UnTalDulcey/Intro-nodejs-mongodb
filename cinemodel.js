var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    cineSchema,
    cine;

cineSchema = new Schema({    
    ciudad: { type: String, require: true },
    cines: 
    [{ 
            nombre: {type: String, require: true},
            direccion: {type: String, require: true},
            telefono: {type: String, require: true},
            peliculas: [{
                nombre: {type: String, require: true},
                hora: {type: String, require: true},
                imagen: {type: String, require: true}
            }]
    }]    
});

module.exports = cine = mongoose.model('cine', cineSchema);