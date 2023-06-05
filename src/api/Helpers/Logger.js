module.exports = (req, res, next) => {
    console.log(`Path ${req.originalUrl}`);
    next();
};
