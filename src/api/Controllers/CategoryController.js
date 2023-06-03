const Category = require('../Models/CategoryModel');

exports.index = (req, res) => {
    Category.findAll()
        .then((categories) => {
            res.json({ message: 'Category list', categories });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.create = (req, res) => {
    const { name, description } = req.body;

    Category.create({ name, description })
        .then((result) => {
            console.log('Successful storing data!');
            res.json({ message: 'Category berhasil ditambahkan!' });
        })
        .catch((err) => {
            console.log(`Failed storing data! ${err}`);
            res.status(400).json({ message: 'Category gagal ditambahkan!' });
        });
};

exports.update = (req, res) => {
    const { categoryId } = req.params;
    const { name, description } = req.body;

    Category.findByPk(categoryId)
        .then((category) => {
            if (category == null) throw new Error('Category tidak ditemukan');
            return Category.update({ name, description }, { where: { id: categoryId } });
        })
        .then(() => {
            console.log('Category berhasil diubah!');
            res.json({ message: 'Category berhasil diubah!' });
        })
        .catch((err) => {
            console.log(`${err.message}`);
            res.status(400).json({ message: `${err.message}` });
        });
};

exports.destroy = (req, res) => {
    const { categoryId } = req.params;

    Category.findByPk(categoryId)
        .then((category) => {
            if (category == null) throw new Error('Category tidak ditemukan');
            return Category.destroy({ where: { id: categoryId } });
        })
        .then(() => {
            console.log('Category berhasil dihapus!');
            res.json({ message: 'Category berhasil dihapus!' });
        })
        .catch((err) => {
            console.log(`${err.message}`);
            res.status(400).json({ message: `${err.message}` });
        });
};
