let db = require('../../database/models')
const { Op } = require("sequelize");
let Sequelize = require('sequelize')

module.exports = {
    listProduct: async (req, res) => {
        db.Productos.findAll({
            include:[{
                all : true
            }]
        })
        .then(productos => {
        let response = {
            status : 200,
            meta : {
                length : productos.length,
                url:`${req.protocol}://${req.get('host')}${req.originalUrl}`
            },
            data : productos
        }
        return res.status(200).json(response)
    })
    },
    apiDetalle : async (req, res) => {
        let idParams = +req.params.id
        db.Productos.findByPk(idParams, {
            include: [{
                all: true
            }]
        })
                    .then(productos=> {
                    
                let response = {
                    status: 200,
                    meta: {
                        url:`${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    data: productos
                }
                return res.status(200).json(response)
            })
            .catch(err => res.status(500).json(err))
            
    }
}

