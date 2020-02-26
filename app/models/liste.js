const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class Liste extends Sequelize.Model{};

Liste.init({
    nom: {
        type: Sequelize.TEXT,
        allowNull: false
    }
},{
    sequelize: dbConnection,
    tableName: "listes",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Liste;