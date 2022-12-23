let db = require('../../database/models')
const { Op } = require("sequelize");

module.exports = {
    categoria: async (req, res) => {
        db.Marcas.findAll()
        .then(marcas => {
        let response = {
            status : 200,
            meta : {
                length : marcas.length,
                url:"api/marcas"
            },
            data : marcas
        }
        return res.status(200).json(response)
    })
    }
}
