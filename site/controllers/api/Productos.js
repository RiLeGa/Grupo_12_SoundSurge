let db = require('../../database/models')
const { Op } = require("sequelize");

module.exports = {
    listProduct: async (req, res) => {
        db.Productos.findAll()
        .then(productos => {
        let response = {
            status : 200,
            meta : {
                length : productos.length,
                url:"http://localhost:4000/api/productos"
            },
            data : productos
        }
        return res.status(200).json(response)
    })
    }
}
