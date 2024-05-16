/* const { DataTypes, Sequelize } = require("sequelize")

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

module.exports = User; */

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return User;
  };
  