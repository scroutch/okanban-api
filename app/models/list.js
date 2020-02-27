const Sequelize = require('sequelize');

const dbConnection = require('../db_connection');

class List extends Sequelize.Model{};

List.init({
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    position: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
},{
    sequelize: dbConnection,
    tableName: "list",
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = List;