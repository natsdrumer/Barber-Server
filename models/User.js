const { DataTypes, Sequelize } = require("sequelize")

const sequelize = require('../config/databaseConnection');

const User = sequelize.define('user', {
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING
    }

}, {
    freezeTableName: true 
});

module.exports = User;