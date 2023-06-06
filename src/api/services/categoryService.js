const makeError = require('http-errors');
const { message } = require('../helpers');

module.exports = function makeCategoryService(model) {
    return Object.freeze({ index, create, update, destroy });

    function isQueryEmpty(query) {
        return Object.keys(query).length === 0;
    }

    function sanitizeQuery(query) {
        for (let key in query) {
            if (query.hasOwnProperty(key) && query[key] === '') {
                delete query[key];
            }
        }
    }

    async function index(query) {
        if (!isQueryEmpty(query)) sanitizeQuery(query);
        const categories = await model.findAll({ raw: true, where: query });
        if (categories.length === 0) throw makeError.NotFound(message.error.category.index);
        return categories;
    }

    async function create(category) {
        return await model.create(category).catch((error) => {
            throw makeError(500, `${message.error.category.create} ${error.message}`);
        });
    }

    async function update(newCategory, categoryId) {
        await index({ id: categoryId });
        return await model.update(newCategory, { where: { id: categoryId } });
    }

    async function destroy(categoryId) {
        await index({ id: categoryId });
        return await model.destroy({ where: { id: categoryId } });
    }
};
