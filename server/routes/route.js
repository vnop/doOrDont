var appRouter = require('express').Router();
var controller = require('../controllers/someController');

appRouter.route('/').get(controller.home);

appRouter.route('/tasks').post(controller.addTask);
appRouter.route('/tasks').delete(controller.removeTask);

module.exports = appRouter;