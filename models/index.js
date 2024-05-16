const { Sequelize } = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {
  sequelize,
  Sequelize,
  User: require('./User')(sequelize, Sequelize),
  Client: require('./Client')(sequelize, Sequelize),
  Barber: require('./Barber')(sequelize, Sequelize),
  Admin: require('./Admin')(sequelize, Sequelize),
  Service: require('./Service')(sequelize, Sequelize),
  Appointment: require('./Appointment')(sequelize, Sequelize),
  Notification: require('./Notification')(sequelize, Sequelize),
};

// Associations
db.User.hasMany(db.Appointment, { foreignKey: 'clientId' });
db.User.hasMany(db.Notification, { foreignKey: 'userId' });
db.Barber.hasMany(db.Appointment, { foreignKey: 'barberId' });
db.Service.hasMany(db.Appointment, { foreignKey: 'serviceId' });

db.Appointment.belongsTo(db.User, { foreignKey: 'clientId' });
db.Appointment.belongsTo(db.Barber, { foreignKey: 'barberId' });
db.Appointment.belongsTo(db.Service, { foreignKey: 'serviceId' });
db.Notification.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;
