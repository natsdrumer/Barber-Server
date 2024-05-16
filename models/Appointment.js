module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('Appointment', {
      appointmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      clientId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'userId',
        },
        allowNull: false,
      },
      barberId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Barbers',
          key: 'barberId',
        },
        allowNull: false,
      },
      serviceId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Services',
          key: 'serviceId',
        },
        allowNull: false,
      },
      appointmentDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      appointmentTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Appointment;
  };
  