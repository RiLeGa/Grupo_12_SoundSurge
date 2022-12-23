const express = require('express');
const router = express.Router();
const {home, search, aboutUs} = require('../controllers/indexController');

const db = require("../database/models")

/* GET home page. */
router.get('/', home);

router.get('/busqueda', search);

router.get('/aboutUs', aboutUs)

/* router.get('/prueba', (req, res) => {
   /*  db.Ordenes.findAll({
        include: [
            {all: true}
        ] */

       /*  usuariosId: req.session.userLogin.id,
        status: 'pending', */
        
       /*      {
                association : 'carrito',
                attributes: ['productosId', 'cantidad'],
                include: [
                    {
                        association : 'producto',
                        attributes: ['id', 'nombre', 'precio', 'descuento', 'stock'],
                        include: [
                            {
                                association : 'imagenes',
                                attributes: ['nombre']
                            }
                        ]
                    }
                ]
            }
        ]
       
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => res.send(err))
})  */



module.exports = router;