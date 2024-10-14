
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize (
    'expresstasks',
    'root',
    'sir2kalFOUR!',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

const connectToDb = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connected Successfully to the db')
    } catch(error) {
        console.log(error)
    }
}

module.exports = { sequelize, connectToDb}