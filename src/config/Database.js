const Sequelize = require('sequelize');

const environtment = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        define: {
            timestamps: false,
        },
    },
};

const sequelize = new Sequelize(environtment.development);
const checkDatabaseConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database Connection Successful!');
    } catch (error) {
        console.log(`Database Connection Failed! ${error.message}`);
    }
};

module.exports = { sequelize, checkDatabaseConnection };
