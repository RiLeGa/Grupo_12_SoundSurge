const express = require('express');
const { productos } = require('../controllers/api/apiController');
const router = express.Router();

const {detalle, carrito, listarCategorias, listarMarcas} = require('../controllers/productosController')

router.get('/detalle/:id', detalle);
router.get('/carrito/:id', carrito);
router.get('/categorias', listarCategorias);
router.get('/marcas', listarMarcas);
router.get('/todos', productos);


module.exports = router;