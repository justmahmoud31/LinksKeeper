const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db.js');

const User = sequelize.define('User', {
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  },
  subscription: {
    type: DataTypes.ENUM('free', 'pro'),
    allowNull: false,
    defaultValue: 'free'
  },
  discordid: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true
  }
}, {

  tableName: 'users',
  timestamps: false
});

module.exports = User;
