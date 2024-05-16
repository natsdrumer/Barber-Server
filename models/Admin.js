module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
      adminId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    });
  
    return Admin;
  };
  