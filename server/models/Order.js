const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
Order : sequelize.define('order', {
    OrderID: {
             type: DataTypes.INTEGER,
             autoIncrement: true,
             allowNull: false,
             primaryKey: true
       },
       OrderNumber: DataTypes.STRING,       
       OrderName: DataTypes.STRING,
       OrderEmail: DataTypes.STRING,
       OrderAddress: DataTypes.STRING,
       OrderCity: DataTypes.STRING,
       OrderZIP: DataTypes.STRING,
       createdAt: DataTypes.DATE,
       updatedAt: DataTypes.DATE,
       CardNumber: DataTypes.DOUBLE,
       CardExpiry: DataTypes.STRING,
       CardCVV: DataTypes.INTEGER
    })
 }

 