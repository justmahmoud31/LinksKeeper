const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config()
const sequelize = new Sequelize(process.env.DBNAME, 'postgres', '123456', {
  host:process.env.DB_HOST,
  dialect: 'postgres'
});

module.exports = sequelize;
