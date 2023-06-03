const express = require('express');
const router = express.Router();
const authenticateToken = require('../Middlewares/Auth');
const { index, create, update, destroy } = require('../Controllers/CategoryController');

router.route('/').get(index).post(create);
router.route('/:categoryId').patch(update).delete(destroy);

module.exports = router;
