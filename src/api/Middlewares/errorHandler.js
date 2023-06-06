module.exports = (error, req, res, next) => {
    const status = error.status ?? 500;
    let response = { error: error.message };
    if (error.data) response.data = error.data;

    return res.status(status).json(response);
};
