const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/databaseConnection');
const { type } = require('os');

const Barber = sequelize.define('barber',
    {
        id:{
            type: DataTypes.INTEGER,
            allwNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
        }
    }
)