/* const Sequelize = require('sequelize');

const User = require('../models/User')
const Appointment = require('../models/Appointment')
const Barber =  require('../models/Barber')
const BarberShop = require('../models/Barbershop');
const Service = require('../models/Service')
const databaseConfig = require('../config/database')

const models = [User, Appointment, Barber, BarberShop, Service];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig)

        models
        .map((model) => model.init(this.connection))
        .map((model) => model.associate && model.associate(this.connection.models));
    }
} */