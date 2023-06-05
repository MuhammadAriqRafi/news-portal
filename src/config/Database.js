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

const checkDatabaseConnection = async (connection) => {
    try {
        await connection.authenticate();
        console.log('Database Connection Successful!');
    } catch (error) {
        console.log(`Database Connection Failed! ${error.message}`);
    }
};

module.exports = function makeDatabaseConnection(db) {
    const connection = new db(environtment.development);
    checkDatabaseConnection(connection);
    return connection;
};
