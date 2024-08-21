require('dotenv').config()
const CONNECTION_STRING = "postgresql://postgres:admin@localhost:5432/anaYogaEssentials_CapstoneProject"
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
   dialect: 'postgres',
})

module.exports = {
   sequelize
}