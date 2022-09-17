const express = require('express');
const router = express.Router();
const {login, register, newUser, editarUsuario} = require('../controllers/usersController');
const registerValidations = require('../validations/registerValidations');
const upload = require('../middlewares/multerUsuarios')

router.get('/login', login);

router.get('/register', register);
router.post('/register', upload.single('imagen'),registerValidations, newUser);

router.get('/perfil', editarUsuario);

module.exports = router;