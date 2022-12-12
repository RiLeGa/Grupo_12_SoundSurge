const express = require('express');
const { usuarios, productos } = require('../controllers/api/apiController');
const router = express.Router();
const {home, search} = require('../controllers/indexController');

/* GET home page. */
router.get('/', home);

router.get('/busqueda', search);

router.get('/productos', productos);


module.exports = router;