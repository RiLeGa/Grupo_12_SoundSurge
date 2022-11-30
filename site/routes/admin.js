const express = require('express');
const router = express.Router();
const {crear, editar, lista, store, actualizar, borrar, userlist, borrarUsuario} = require('../controllers/adminController');
const { usuarios, productos } = require('../controllers/api/apiController');
const adminCheck = require('../middlewares/adminCheck')
const upload = require('../middlewares/multerProductos')
const productValidator = require("../validations/productsValidation")



/* GET admin pages. */
router.get('/crear', adminCheck, crear);
router.post('/crear', upload.array('imagen'),productValidator, store);

router.get('/editar/:id', adminCheck, editar);
router.put('/editar/:id',upload.fields([
    {name:'imagen1',maxCount: 1},
    {name:'imagen2',maxCount: 1},
    {name:'imagen3',maxCount: 1},
    {name:'imagen4',maxCount: 1}
]),productValidator, actualizar);

router.delete('/borrar/:id', adminCheck, borrar);
router.delete('/borrarUsuario/:id', borrarUsuario);



router.get('/lista', adminCheck, lista);

router.get('/usersList', adminCheck, userlist);

router.get('/todos', productos);


module.exports = router;