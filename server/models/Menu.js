const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
Menu : sequelize.define('menu', {
    ItemID: {
             type: DataTypes.INTEGER,
             autoIncrement: true,
             allowNull: false,
             primaryKey: true
       },
       ItemName: DataTypes.STRING,
       ItemDescription: DataTypes.STRING,
       ImageURL: DataTypes.TEXT,
       itemprice: DataTypes.FLOAT,
       category: DataTypes.INTEGER
    })
 }

 