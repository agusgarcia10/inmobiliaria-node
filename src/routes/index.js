const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Ignacio V. García Propiedades' });
});

router.get('/login', (req, res) => {
    res.render('login.html', { title: 'Login' });
});

router.get('/inmuebles', (req, res) => {
    res.render('inmuebles.html', { title: 'Inmuebles' });
});

router.get('/servicios', (req, res) => {
    res.render('servicios.html', { title: 'Servicios' });
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros.html', { title: 'Nosotros' });
});

router.get('/contacto', (req, res) => {
    res.render('contacto.html', { title: 'Contacto' });
});

module.exports = router;