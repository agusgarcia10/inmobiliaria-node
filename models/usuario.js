var mongoose = require('mongoose');
//Crear Schema
var UsuarioSchema = mongoose.Schema({
nombre: String,
apellido: String,
edad: Number,
password: String
});

//Exportar modelo
module.exports = mongoose.model('Usuario', UsuarioSchema);