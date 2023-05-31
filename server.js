const express = require('express');
const dotenv = require('dotenv');
const app = express();

if (process.env.NODE_ENV !== 'production') dotenv.config();

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', logger, (req, res) => {
    res.status(200).json({ message: "We're good!" });
});

const categoryRouter = require('./routes/categories');
app.use('/categories', categoryRouter);

function logger(req, res, next) {
    console.log(`Path ${req.originalUrl}`);
    next();
}

app.listen(process.env.PORT || 3000);
