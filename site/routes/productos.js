const express = require('express');
const router = express.Router();
const {detalle, carrito} = require('../controllers/productosController')

router.get('/detalle/:id', detalle);
router.get('/carrito', carrito);


module.exports = router;