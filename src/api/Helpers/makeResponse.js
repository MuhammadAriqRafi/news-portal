module.exports = (message = '', data = [], status = 200) => {
    const response = { status, body: { message, data } };
    if (data.length === 0) delete response.body.data;
    return Object.freeze(response);
};
