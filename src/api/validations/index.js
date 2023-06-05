const joi = require('joi');
const makeCategoryValidation = require('./categoryValidation');

const categoryValidation = makeCategoryValidation(joi);

module.exports = { categoryValidation };
