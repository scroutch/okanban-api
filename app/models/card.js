const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class Card extends Sequelize.Model{};

Card.init({
    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    position: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    color: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "#fff"
    }
},{
    sequelize: dbConnection,
    tableName: "card",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Card;