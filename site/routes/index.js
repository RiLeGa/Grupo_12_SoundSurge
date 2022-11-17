const express = require('express');
const { usuarios } = require('../controllers/api/apiController');
const router = express.Router();
const {home, search} = require('../controllers/indexController');

/* GET home page. */
router.get('/', home);
router.get('/busqueda', search);
router.get('/usuarios', usuarios);


module.exports = router;