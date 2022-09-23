const express = require('express');
const router = express.Router();
const {login, register, newUser, editarUsuario, inLogin, perfil} = require('../controllers/usersController');
const registerValidations = require('../validations/registerValidations');
const loginValidator = require('../validations/loginValidator');
const upload = require('../middlewares/multerUsuarios')


router.get('/register', register);
router.post('/register', upload.single('imagen'),registerValidations, newUser);

router.get('/login', login);
router.post('/login', loginValidator, inLogin);

router.get('/perfil', perfil);
router.put('/perfil', editarUsuario);

module.exports = router;



