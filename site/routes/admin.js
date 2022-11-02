const express = require('express');
const router = express.Router();
const {crear, editar, lista, store, actualizar, borrar, papelera, userlist, borrarUsuario} = require('../controllers/adminController')
const adminCheck = require('../middlewares/adminCheck')
const upload = require('../middlewares/multerProductos')



/* GET admin pages. */
router.get('/crear', adminCheck, crear);
router.post('/crear', upload.array('imagen'), store);

router.get('/editar/:id', adminCheck, editar);
router.put('/editar/:id',upload.fields([
    {name:'imagen1',maxCount: 1},
    {name:'imagen2',maxCount: 1},
    {name:'imagen3',maxCount: 1},
    {name:'imagen4',maxCount: 1}
]), actualizar);

router.delete('/borrar/:id', adminCheck, borrar);
router.delete('/borrarUsuario/:id', borrarUsuario);

router.get('/papelera',adminCheck, papelera)

router.get('/lista', adminCheck, lista);

router.get('/userlist', userlist)


module.exports = router;