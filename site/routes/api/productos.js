const { listProduct, apiDetalle } = require('../../controllers/api/Productos');
const express = require('express');
const router = express.Router();

/* GET home page. */
//router.get('/products', paginacion);

// 
router.get("/", listProduct) // mostrarnos todos los productos que tiene el carrito

router.get('/detalle/:id', apiDetalle);


module.exports = router;