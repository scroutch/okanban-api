const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class Label extends Sequelize.Model{};

Label.init({
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    color: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "#fff"
    }
},{
    sequelize: dbConnection,
    tableName: "label",
    createdAt: "created_at",
    updatedAt: "updated_at"
})


module.exports = Label;