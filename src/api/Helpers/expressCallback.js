module.exports = (controller) => async (req, res, next) => {
    const httpRequest = extractRequest(req);
    try {
        const response = await controller(httpRequest);
        res.status(response.status).json(response.body);
    } catch (error) {
        return next(error);
    }
};

const extractRequest = (req = {}) => {
    return Object.freeze({
        method: req.method,
        path: req.path,
        body: req.body,
        params: req.params,
        query: req.query,
    });
};
