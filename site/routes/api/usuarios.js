const { listUser } = require('../../controllers/api/Usuarios');
const express = require('express');
const router = express.Router();

/* GET home page. */
//router.get('/products', paginacion);

// 
router.get("/", listUser) // mostrarnos todos los productos que tiene el carrito

module.exports = router;