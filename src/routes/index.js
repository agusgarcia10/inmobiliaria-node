const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Ignacio V. García Propiedades' });
});

router.get('/login', (req, res) => {
    res.render('login.html', { title: 'Ignacio V. García Propiedades' });
});

router.get('/inmuebles', (req, res) => {
    res.render('inmuebles.html', { title: 'Ignacio V. García Propiedades' });
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