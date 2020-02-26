const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class Carte extends Sequelize.Model{};

Carte.init({
    titre: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    position: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    couleur: {
        type: Sequelize.TEXT,
        allowNull: true
    }
},{
    sequelize: dbConnection,
    tableName: "cartes",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Carte;