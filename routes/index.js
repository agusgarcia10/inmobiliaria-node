const express = require('express');
const router = express.Router();
var InmobiliariaModel = require('../models/inmobiliaria');
// var UsuariosModel = require('../models/usuario');

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Ignacio V. García Propiedades' });
});

router.get('/inmuebles', (req, res) => {
    InmobiliariaModel.find({}, function (error, documentos) {
        if (error) {
            return console.error(err);
        } else {
            console.log(documentos)
            res.render('inmuebles.html', { title: 'Inmuebles', inmuebles: documentos });
        }
    });
    // res.render('inmuebles.html', { title: 'Ignacio V. García Propiedades' });
});

router.get('/inmuebles/api/', function(req, res, next) {
	InmobiliariaModel.find({}, function(error, documentos){
		if(error){
			return console.error(err);
		}else{
			console.log(documentos)
			  res.send(200, documentos);
		}
	});
});

router.get('/inmuebles/nuevo/:nombre/:propiedad/:provincia/:zona/:barrio/:ambiente/:moneda', (req, res) => {
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

router.post('/inmuebles/nuevo/api', function (req, res, next) {
    //Instanciar modelo con datos
    var inmo = new InmobiliariaModel({
        nombre: req.body.nombre,
        propiedad: req.body.propiedad,
        provincia: req.body.provincia,
        zona: req.body.zona,
        barrio: req.body.barrio,
        ambiente: req.body.ambiente,
        moneda: req.body.moneda
    });

    inmo.save(function (error, documento) {
        if (error) {
            return console.error(error);
        } else {
            res.send(`La propiedad ${documento.nombre} ha sido dado de alta con el ID: ${documento._id}`);
        }
    });
});

router.get('/inmuebles/modificar/:id/:nombre/:propiedad/:provincia/:zona/:barrio/:ambiente/:moneda', function (req, res, next) {
    //Instanciar modelo con datos
    InmobiliariaModel.findById(req.params.id, function (error, documento) {
        if (error) {
            return console.error(err);
        } else {
            var inmoModificar = documento;
            inmoModificar.nombre = req.params.nombre;
            inmoModificar.propiedad = req.params.propiedad;
            inmoModificar.provincia = req.params.provincia;
            inmoModificar.zona = req.params.zona;
            inmoModificar.barrio = req.params.barrio;
            inmoModificar.ambiente = req.params.ambiente;
            inmoModificar.moneda = req.params.moneda;
            inmoModificar.save(function (error, documento) {
                if (error) {
                    return console.error(err);
                } else {
                    console.log(inmoModificar);
                    console.log(documento);
                }
            });
        }
    });
    res.send('<p>Propiedad dada de alta</p><a href="/inmuebles">Inmuebles</a>');
});

router.put('/inmuebles/api/modificar', function (req, res, next) {
    //Instanciar modelo con datos
    console.log(req.body);

    InmobiliariaModel.findById(req.body.id, function (error, documento) {
        if (error) {
            return console.error(error);
        } else {
            var inmoModificar = documento;
            inmoModificar.nombre = req.body.nombre;
            inmoModificar.propiedad = req.body.propiedad;
            inmoModificar.provincia = req.body.provincia;
            inmoModificar.zona = req.body.zona;
            inmoModificar.barrio = req.body.barrio;
            inmoModificar.ambiente = req.body.ambiente;
            inmoModificar.moneda = req.body.moneda;
            inmoModificar.save(function (error, documento) {
                if (error) {
                    return console.error(error);
                } else {
                    console.log(inmoModificar);
                    console.log(documento);
                    res.send('La propiedad ha sido modificada');
                }
            });
        }
    });
});

router.get('/inmuebles/eliminar/:id', function (req, res, next) {
    //Instanciar modelo con datos
    InmobiliariaModel.remove({ _id: req.params.id }, function (error, documento) {
        if (error) {
            return console.error(error);
        } else {
            console.log('Inmueble eliminado');
        }
    });
    res.send('<p>Propiedad eliminada</p><a href="/inmuebles">Inmuebles</a>');
});

router.delete('/inmuebles/api/eliminar/:id', function(req, res, next) {
	//Instanciar modelo con datos
	console.log(req.params)
	InmobiliariaModel.remove({_id: req.params.id}, function(error, documento){
		if(error){
			return console.error(error);
		}else{
			console.log('Propiedad eliminada');
		}
	});
  res.send('Propiedad Eliminada');
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