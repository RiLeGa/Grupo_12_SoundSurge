const express = require('express');
const router = express.Router();
const {login, register, newUser, editarUsuario, inLogin, perfil, logout} = require('../controllers/usersController');
const registerValidations = require('../validations/registerValidations');
const loginValidator = require('../validations/loginValidator');
const upload = require('../middlewares/multerUsuarios')
const userLoginCheck = require('../middlewares/userLoginCheck')



router.get('/register', register);
router.post('/register', upload.single('imagen'),registerValidations, newUser);

router.get('/login', login);
router.post('/login', loginValidator, inLogin);

router.get('/perfil', userLoginCheck, perfil);
router.put('/Perfil', userLoginCheck, editarUsuario);
router.delete('/logout', logout);

module.exports = router;



