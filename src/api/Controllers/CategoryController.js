const { makeResponse } = require('../helpers');
const { categoryService } = require('../services');
const { categoryValidation } = require('../validations');
const { message } = require('../helpers');
const makeError = require('http-errors');

exports.index = async (httpRequest) => {
    const categories = await categoryService.index(httpRequest.query);
    return makeResponse(message.success.category.index, categories, 200);
};

exports.create = async (httpRequest) => {
    const { error, value } = categoryValidation(httpRequest.body);
    if (error) throw makeError(403, message.error.validation, { data: error.details });

    await categoryService.create(value);
    return makeResponse(message.success.category.create);
};

exports.update = async (httpRequest) => {
    const { error, value } = categoryValidation(httpRequest.body);
    if (error) throw makeError(403, message.error.validation, { data: error.details });

    const { categoryId } = httpRequest.params;
    await categoryService.update(value, categoryId);
    return makeResponse(message.success.category.update);
};

exports.destroy = async (httpRequest) => {
    const { categoryId } = httpRequest.params;
    await categoryService.destroy(categoryId);
    return makeResponse(message.success.category.destroy);
};
