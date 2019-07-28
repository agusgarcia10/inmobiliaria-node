var express = require('express');
var router = express.Router();
var UsuariosModel = require('../models/usuario');

router.get('/login', (req, res, next) => {
    res.render('login.html', {error:""});
});

router.post('/login', (req, res, next) => {
    UsuariosModel.find({email: req.body.email, password: req.body.password}, function(error, documentos){
        if(error){
            return console.error(err);
        }else{
            if(documentos.length > 0){
                req.session.email = req.body.email
                res.redirect('signup/');
            }else{
                res.render('login.html', {error: "Email o contraseña incorrectos"})
            }
        }
    });
});

module.exports = router;