const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Config/db.js');
const Category = require('./category.js');
const User = require('./users.js');
class Links extends Model { }
Links.init({
    linkid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    linktitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linkurl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linkdescription: {
        type: DataTypes.STRING,
        allowNull: true
    },
    userid: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "userid"
        }
    },
    ispublic:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    categoryid: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: "categoryid"
        }
    }
}, {
    sequelize,
    tableName: 'links',
    timestamps: false
});
module.exports = Links;