var appRouter = require('express').Router();
var controller = require('../controllers/someController');

appRouter.route('/').get(controller.home);

module.exports = appRouter;