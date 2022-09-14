const express = require('express');
const router = express.Router();
const {login, register, newUser} = require('../controllers/usersController')

router.get('/login', login);

router.get('/register', register);
router.post('/register', newUser);

module.exports = router;