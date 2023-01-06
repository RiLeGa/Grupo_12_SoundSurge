let db = require('../../database/models')
const { Op } = require("sequelize");

module.exports = {
    listUser: async (req, res) => {
        db.Usuarios.findAll()
        .then(usuarios => {
        let response = {
            status : 200,
            meta : {
                length : usuarios.length,
                url:"http://localhost:4000/api/usuarios"
            },
            data : usuarios
        }
        return res.status(200).json(response)
    })
    }
}
