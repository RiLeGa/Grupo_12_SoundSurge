const express = require('express');
const { usuarios, productos } = require('../controllers/api/apiController');
const router = express.Router();
const {home} = require('../controllers/indexController');

/* GET home page. */
router.get('/', home);

router.get('/productos', productos);


module.exports = router;