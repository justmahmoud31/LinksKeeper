const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Config/db.js');
const Links = require('./links.js');

class Category extends Model {}

Category.init({
    categoryid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoryname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linkid: {
        type: DataTypes.INTEGER,
        references: {
            model: Links,
            key: 'linkid'
        }
    }
}, {
    sequelize,
    tableName: 'category', 
    timestamps: false
});

module.exports = Category;
