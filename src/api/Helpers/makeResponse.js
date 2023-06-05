module.exports = ({ status = 200, data = {}, message = '', error = null } = {}) => {
    if (error != null)
        return {
            status,
            body: { error },
        };
    else {
        return {
            status,
            body: {
                message,
                data,
            },
        };
    }
};
