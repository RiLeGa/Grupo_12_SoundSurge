const {sequelize} = require('../database/models')

const dbConnectionTest = async () => {
    try {
        await sequelize.authenticate()
        console.log('La coneccion fue establecida con exito');
    } catch (error) {
        console.log('No pudimos conectarnos con la base de datos',error);
    }
}

module.exports = dbConnectionTest