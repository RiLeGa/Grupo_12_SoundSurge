const express = require('express');
const { usuarios, productos } = require('../controllers/api/apiController');
const router = express.Router();
const {home, search} = require('../controllers/indexController');

const db = require("../database/models")

/* GET home page. */
router.get('/', home);

router.get('/busqueda', search);

router.get('/productos', productos);

router.get('/prueba', (req, res) => {
    db.Ordenes.findAll({
        include: [/* 
            {all: true}
        ] */

        /* usuariosId: req.session.userLogin.id,
        status: 'pending',*/
        
            {
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
})



module.exports = router;