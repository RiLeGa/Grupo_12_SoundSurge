const express = require('express');
const router = express.Router();
const {crear, editar, lista, store, actualizar, borrar, papelera, userlist, borrarUsuario} = require('../controllers/adminController')

/* GET admin pages. */
router.get('/crear', crear);
router.post('/crear', store);

router.get('/editar/:id', editar);
router.put('/editar/:id', actualizar);

router.delete('/borrar/:id', borrar);
router.delete('/borrarUsuario/:id', borrarUsuario);

router.get('/papelera', papelera)

router.get('/lista', lista);

router.get('/userlist', userlist)


module.exports = router;