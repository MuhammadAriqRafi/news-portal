const makeCategoryService = require('./categoryService');
const { CategoryModel } = require('../models');

const categoryService = makeCategoryService(CategoryModel);

module.exports = { categoryService };
