const {detalle, carrito, listarMarcas, listarTodos, listarMasVendidos} = require('../controllers/productosController')
const express = require('express');
const router = express.Router();


router.get('/detalle/:id', detalle);
router.get('/carrito', carrito);
router.get('/marcas', listarMarcas);
router.get('/todos', listarTodos);
router.get('/loMasVendido', listarMasVendidos);


module.exports = router;