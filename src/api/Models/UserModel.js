const { sequelize } = require('../../config').database;
const { DataTypes } = require('sequelize');

const User = sequelize.define(
    'users',
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = User;
