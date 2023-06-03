if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const { checkDatabaseConnection } = require('./config').database;
const logger = require('./api/Helpers/Logger');
const app = express();
require('./api/Models/UserModel');
require('./api/Models/CategoryModel');

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', logger, (req, res) => {
    res.status(200).json({ message: "We're good!" });
});

const categoryRouter = require('./api/Routes/Categories');
app.use('/categories', categoryRouter);

checkDatabaseConnection();
app.listen(process.env.PORT || 3000);
