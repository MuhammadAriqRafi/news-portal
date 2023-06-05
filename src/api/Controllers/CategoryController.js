const { makeResponse } = require('../helpers');
const { categoryService } = require('../services');
const { categoryValidation } = require('../validations');

// TODO: Create file contains all error messages and success messages

exports.index = async (httpRequest) => {
    const { data, error } = await categoryService.index(httpRequest.query);
    return makeResponse({ message: 'Category List', data, error });
};

exports.create = async (httpRequest) => {
    const { error: validationError, value } = categoryValidation(httpRequest.body);
    if (validationError) return makeResponse({ status: 403, message: 'ValidationError', data: validationError.details });

    const { error } = await categoryService.create(value);
    return makeResponse({ message: 'Category berhasil ditambahkan!', error });
};

exports.update = async (httpRequest) => {
    const { error: validationError, value } = categoryValidation(httpRequest.body);
    if (validationError) return makeResponse({ status: 403, message: 'ValidationError', data: validationError.details });

    const { categoryId } = httpRequest.params;
    const { error } = await categoryService.update(value, categoryId);
    return makeResponse({ message: 'Category berhasil diubah!', error });
};

exports.destroy = async (httpRequest) => {
    const { categoryId } = httpRequest.params;
    const { error } = await categoryService.destroy(categoryId);
    return makeResponse({ message: 'Category berhasil dihapus!', error });
};
