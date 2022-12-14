const db = require("../DB/database")
const {DataTypes}=require("sequelize")
module.exports = () => {
   return  db.define('User', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      token: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

    })
  }