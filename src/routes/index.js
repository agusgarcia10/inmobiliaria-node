const express = require('express');
const router = express.Router();
var InmobiliariaModel = require('../models/inmobiliaria');

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Ignacio V. García Propiedades' });
});

router.get('/login', (req, res) => {
    res.render('login.html', { title: 'Ignacio V. García Propiedades' });
});

router.get('/inmuebles', (req, res) => {
    res.render('inmuebles.html', { title: 'Ignacio V. García Propiedades' });
});

router.get('/inmuebles/:nombre/:propiedad/:provincia/:zona/:barrio/:ambiente/:moneda', (req, res) => {
    // Instanciar modelo datos
    var inmo = new InmobiliariaModel({
        nombre: req.params.nombre,
        propiedad: req.params.propiedad,
        provincia: req.params.provincia,
        zona: req.params.zona,
        barrio: req.params.barrio,
        ambiente: req.params.ambiente,
        moneda: req.params.moneda
    });

    inmo.save(function(error, documento){
        if(error){
            return console.error(err);
        }else{
            console.log("Propiedad guardada");
        }
    });
    res.send('<p>Propiedad dada de alta</p><a href="/inmuebles">Inmuebles</a>');
});

router.get('/inmuebles/departamento-en-venta-botanical-malabia', (req, res) => {
    res.render('inmuebles_botanical.html', { title: 'Ignacio V. García Propiedades' });
})

router.get('/servicios', (req, res) => {
    res.render('servicios.html', { title: 'Ignacio V. García Propiedades' });
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros.html', { title: 'Ignacio V. García Propiedades' });
});

router.get('/contacto', (req, res) => {
    res.render('contacto.html', { title: 'Ignacio V. García Propiedades' });
});

module.exports = router;