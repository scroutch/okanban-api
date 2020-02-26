const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class Label extends Sequelize.Model{};

Label.init({
    nom: {
        type: Sequelize.TEXT,
        allowNull: false
    }
},{
    sequelize: dbConnection,
    tableName: "labels",
    createdAt: "created_at",
    updatedAt: "updated_at"
})


module.exports = Label;