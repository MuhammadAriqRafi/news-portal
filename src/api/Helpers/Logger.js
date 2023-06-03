function logger(req, res, next) {
    console.log(`Path ${req.originalUrl}`);
    next();
}

module.exports = logger;
