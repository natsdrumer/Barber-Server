module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define('Notification', {
      notificationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'userId',
        },
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sentDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  
    return Notification;
  };
  