const sequelizeDb = require('sequelize')
const sequelizeConfig = new sequelizeDb(
    'empresa',// O nome do bando de dados 
    'root',// nome do usuário do banco
    '',// senha do banco de dados

    {
        dialect:'sqlite',
        storage:'./empresa.sqlite'
    }
)

module.exports = {sequelizeDb, sequelizeConfig}