var mongoose = require('mongoose');

// Crear schema
var InmobiliariaSchema = mongoose.Schema({
    nombre: String,
    propiedad: String,
    provincia: String,
    zona: String,
    barrio: String,
    ambiente: Number,
    moneda: String
});

// Exportar modelo
module.exports = mongoose.model('Inmobiliaria', InmobiliariaSchema);