const express = require('express');
const router = express.Router();
const {detalle, carrito, listarCategorias, listarMarcas, listarTendencia} = require('../controllers/productosController')

router.get('/detalle/:id', detalle);
router.get('/carrito/:id', carrito);
router.get('/categorias', listarCategorias);
router.get('/marcas', listarMarcas);
router.get('/loMasVendido', listarTendencia);


module.exports = router;