const { index, create, update, destroy } = require('../controllers/categoryController');
const authenticateToken = require('../middlewares/Auth');
const { expressCallback } = require('../helpers');

module.exports = function makeCategoryRouter(express) {
    const router = express.Router();

    router.route('/').get(expressCallback(index)).post(expressCallback(create));
    router.route('/:categoryId').patch(expressCallback(update)).delete(expressCallback(destroy));

    return router;
};
