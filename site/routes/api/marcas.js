const {marca} = require('../../controllers/api/Marca');
const express = require('express');
const router = express.Router();


router.get("/", marca) 

module.exports = router;