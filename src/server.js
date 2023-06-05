if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const app = express();
const { categoryRouter } = require('./api/routes');
const { logger } = require('./api/helpers');

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: "We're good!" }));

app.use('/categories', categoryRouter);

app.listen(process.env.PORT || 3000);
