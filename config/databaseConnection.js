const Sequelize = require('sequelize');
const database = require('./database');

module.exports = new Sequelize(
    database.DB_NAME, database.DB_USER, database.DB_PASS, {
        dialect: 'postgres'
    }
)