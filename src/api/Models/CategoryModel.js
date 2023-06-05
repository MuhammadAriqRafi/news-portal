module.exports = function makeCategoryModel(db, connection) {
    return connection.define('category', {
        name: {
            type: db.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: db.DataTypes.TEXT,
            allowNull: true,
        },
    });
};
