module.exports = Object.freeze({
    success: Object.freeze({
        category: Object.freeze({
            index: 'Category List',
            create: 'Category berhasil ditambahkan!',
            update: 'Category berhasil diubah!',
            destroy: 'Category berhasil dihapus!',
        }),
    }),
    error: Object.freeze({
        category: Object.freeze({
            index: 'Category tidak ditemukan!',
            create: 'Category gagal ditambahkan!',
        }),
        validation: 'ValidationError',
    }),
});
