const { DataTypes, Sequelize } = require("sequelize")

const sequelize = require('../config/databaseConnection');
const bcrypt = require('bcrypt');
const { Hooks } = require("sequelize/lib/hooks");

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
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
    }

}, {
    freezeTableName: true,
    hooks: {
      beforeCreate: async (user) => {
        console.log(user.password);
        const saltRounds = 10;
        user.password = await bcrypt.hash(user.password, saltRounds);
        console.log(user.password);
      }
    } 
},


);

module.exports = User;

/* module.exports = (sequelize, DataTypes) => {
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
  }; */
  