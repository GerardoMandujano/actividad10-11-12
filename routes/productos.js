const { json } = require('express');
var express = require('express');
var router = express.Router();
const under = require('underscore');

const productos = require('./producto.json');

router.get('/create', function(req, res) {
    res.render('form-productos');


});
router.get('/update', function(req, res) {

    res.render('form-edit-products');


});

router.get('/', function(req, res, next) {
    res.render('productos', {
        producto: productos
    });


});

router.post('/crear', (req, res) => {
    const { nombre, descripccion, precio } = req.body;

    if (nombre && descripccion && precio) {

        const id = productos.length + 1;
        const newMueble = {...req.body, id };
        //console.log(newMueble);
        productos.push(newMueble);
        res.render('form-productos');
    } else {
        res.json({
            "error": "Hubo un error "
        });
    }


});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    //console.log(id);
    under.each(productos, (producto, i) => {
        if (producto.id == id) {
            productos.splice(i, 1);
        }
    });
    res.json({
        "respuesta": "ok",
        "productos": productos
    });

});

router.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    //console.log(id);
    under.each(productos, (producto, i) => {
        if (producto.id == id) {
            productos.splice(i, 1);
        }
    });
    res.redirect('/productos');
});

router.put('/:id', (req, res) => {
    const { nombre, descripccion, precio } = req.body;
    const { id } = req.params;
    if (nombre && descripccion && precio) {
        under.each(productos, (producto, i) => {
            if (producto.id == id) {
                producto.nombre = nombre;
                producto.descripccion = descripccion;
                producto.precio = precio;
            }
        });
        res.json({
            "respuesta": "ok",
            "productos": productos
        });
    } else {
        res.json({
            "error": "Hubo un error "
        });
    }
});

router.post('/update-product/:id', (req, res) => {
    const { nombre, descripccion, precio } = req.body;
    const { id } = req.params;
    if (nombre && descripccion && precio) {
        under.each(productos, (producto, i) => {
            if (producto.id == id) {
                producto.nombre = nombre;
                producto.descripccion = descripccion;
                producto.precio = precio;
            }
        });
        res.redirect('/');
    } else {
        res.json({
            "error": "Hubo un error "
        });
    }
});


router.get('/update/:id', (req, res) => {
    //const { nombre, descripccion, precio } = req.body;
    const { id } = req.params;
    if (id) {
        under.each(productos, (producto, i) => {
            if (producto.id == id) {
                res.render('form-edit-products', {
                    id: producto.id,
                    nombre: producto.nombre,
                    descripccion: producto.descripccion,
                    precio: producto.precio
                });
            }
        });
        res.render('form-edit-products');
    } else {
        res.json({
            "error": "Hubo un error "
        });
    }
});







module.exports = router;