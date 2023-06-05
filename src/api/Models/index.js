const makeCategoryModel = require('./categoryModel');
const { databaseConnection } = require('../../config');
const { Sequelize } = require('sequelize');

const CategoryModel = makeCategoryModel(Sequelize, databaseConnection);

module.exports = { CategoryModel };
