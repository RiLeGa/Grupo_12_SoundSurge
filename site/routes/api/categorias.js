const {categoria} = require('../../controllers/api/Categoria');
const express = require('express');
const router = express.Router();


router.get("/", categoria) 
/* 
router.get('/:categorias?', listarCategorias); */

module.exports = router;