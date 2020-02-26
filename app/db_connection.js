const Sequelize = require('sequelize');

// on instancie la connection 
const dbConnection = new Sequelize(process.env.PG_URL);

// et on l'exporte !
module.exports = dbConnection;