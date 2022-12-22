let db = require('../../database/models')
const { Op } = require("sequelize");

module.exports = {
    categoria: async (req, res) => {
        db.Categorias.findAll()
        .then(categorias => {
        let response = {
            status : 200,
            meta : {
                length : categorias.length,
                url:"api/categorias"
            },
            data : categorias
        }
        return res.status(200).json(response)
    })
    }
}
