const express = require('express');
const makeCategoryRouter = require('./categories');

const categoryRouter = makeCategoryRouter(express);

module.exports = { categoryRouter };
