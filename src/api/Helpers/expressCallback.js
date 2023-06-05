module.exports = (controller) => (req, res) => {
    const httpRequest = extractRequest(req);
    controller(httpRequest)
        .then((httpResponse) => {
            res.status(httpResponse.status).json(httpResponse.body);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'An unknown error occured' });
        });
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
