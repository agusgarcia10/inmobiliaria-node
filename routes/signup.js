var express = require('express');
var router = express.Router();
var UsuariosModel = require('../models/usuario');

router.get('/signup', function (req, res, next) {
    res.render('signup.html', { error: "" });
});

router.post('/signup', function (req, res, next) {
    UsuariosModel.find({ email: req.body.email }, function (error, documentos) {
        if (error) {
            return console.error(err);
        } else {
            if (documentos == email) {
                res.render('signup.html', { error: "Email no disponible" })
            } else {
                var usuario = new UsuariosModel({
                    nombre: req.params.nombre,
                    email: req.params.email,
                    password: req.params.password
                });
                console.log(usuario)
                usuario.save(function (error, documento) {
                    if (error) {
                        return console.error(err);
                    } else {
                        console.log('Se ha creado nuevo usuario');
                    }
                });
                res.send('<p>Nuevo usuario</p><p><a href="/">Ir a inicio</p>')
            }
        }
    });
});

module.exports = router;