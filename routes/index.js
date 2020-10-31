var express = require('express');
var router = express.Router();


var obj = {
    nombre: 'Gerardo',
    mascota: 'perro',
};
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Bienvenido a la actividad 10,11,12',
        pie: 'Gerardo Mandujano'
    });

});

router.get('/formulario', function(req, res) {
    res.render('formulariopost', {
        title: 'Formulario',
    });
});

router.get('/formulario-get', function(req, res) {
    res.render('formularioget', {
        title: 'Formulario',
    });
});


router.post('/enviardatos', (req, res) => {

    var respuestas = req.body;
    var hombre = [];
    var mujer = [];

    if (respuestas.pregunta == 1) {
        hombre.push(respuestas.pregunta);


    } else {
        mujer.push(respuestas.pregunta);

    }
    if (respuestas.pregunta1 == 1) {
        hombre.push(respuestas.pregunta1);


    } else {
        mujer.push(respuestas.pregunta1);

    }
    if (respuestas.pregunta2 == 1) {
        hombre.push(respuestas.pregunta2);


    } else {
        mujer.push(respuestas.pregunta2);

    }
    if (respuestas.pregunta3 == 1) {
        hombre.push(respuestas.pregunta3);


    } else {
        mujer.push(respuestas.pregunta3);

    }
    if (respuestas.pregunta4 == 1) {
        hombre.push(respuestas.pregunta);


    } else {
        mujer.push(respuestas.pregunta4);

    }
    res.render('resultado', {
        hombres: hombre.length,
        mujeres: mujer.length
    });



    console.log(hombre.length);
    console.log(mujer.length);


});

router.get('/enviardatos-get', (req, res) => {

    var respuestas = req.body;
    var hombre = [];
    var mujer = [];

    if (respuestas.pregunta == 1) {
        hombre.push(respuestas.pregunta);


    } else {
        mujer.push(respuestas.pregunta);

    }
    if (respuestas.pregunta1 == 1) {
        hombre.push(respuestas.pregunta1);


    } else {
        mujer.push(respuestas.pregunta1);

    }
    if (respuestas.pregunta2 == 1) {
        hombre.push(respuestas.pregunta2);


    } else {
        mujer.push(respuestas.pregunta2);

    }
    if (respuestas.pregunta3 == 1) {
        hombre.push(respuestas.pregunta3);


    } else {
        mujer.push(respuestas.pregunta3);

    }
    if (respuestas.pregunta4 == 1) {
        hombre.push(respuestas.pregunta);


    } else {
        mujer.push(respuestas.pregunta4);

    }
    res.render('resultado', {
        hombres: hombre.length,
        mujeres: mujer.length
    });







    console.log(hombre.length);
    console.log(mujer.length);


});

module.exports = router;