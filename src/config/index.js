const Sequelize = require('sequelize');
const makeDatabaseConnection = require('./Database');

const databaseConnection = makeDatabaseConnection(Sequelize);

module.exports = { databaseConnection };
