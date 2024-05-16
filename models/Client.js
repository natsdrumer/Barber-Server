module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
      clientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    });
  
    return Client;
  };
  