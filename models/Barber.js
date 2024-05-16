module.exports = (sequelize, DataTypes) => {
    const Barber = sequelize.define('Barber', {
      barberId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      specialty: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return Barber;
  };
  