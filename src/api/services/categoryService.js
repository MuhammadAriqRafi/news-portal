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
        try {
            if (!isQueryEmpty(query)) sanitizeQuery(query);
            const categories = await model.findAll({ raw: true, where: query });
            return { data: categories, error: null };
        } catch (error) {
            return { data: null, error: 'Category tidak ditemukan' };
        }
    }

    async function create(category) {
        try {
            await model.create(category);
            return { error: null };
        } catch (error) {
            return { error: `Category gagal ditambahkan! ${error.message}` };
        }
    }

    async function update(newCategory, categoryId) {
        try {
            const { data: oldCategory } = await index({ id: categoryId });
            if (oldCategory.length === 0) throw new Error('Category tidak ditemukan');
            await model.update(newCategory, { where: { id: categoryId } });
            return { error: null };
        } catch (error) {
            return { error: `${error.message}` };
        }
    }

    async function destroy(categoryId) {
        try {
            const { data: targetCategory } = await index({ id: categoryId });
            if (targetCategory.length === 0) throw new Error('Category tidak ditemukan');
            await model.destroy({ where: { id: categoryId } });
            return { error: null };
        } catch (error) {
            return { error: `${error.message}` };
        }
    }
};
