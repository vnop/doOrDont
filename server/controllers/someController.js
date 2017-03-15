var path = require('path');
var index = path.join(__dirname, '../../client/index.html');
var Task = require('../models/task.js');

module.exports = {
  home: function(req, res) {
    res.sendFile(index);
  },

  addTask: function(req, res) {
    var task = req.body;
    var newTask = new Task(task);
    newTask.save((err, task) => {
      if (err) {
        return console.log('Add task to DB error: ', err);
      }
      console.log('Add task to DB successful: ', task);
      res.end(JSON.stringify(task));
    });
  },

  removeTask: function(req, res) {
    var taskId = req.query.value;
    Task.remove({'id': taskId}, (err, task) => {
      if (err) {
        return console.log('Delete task from DB error: ', err);
      }
      console.log('Delete task from DB successful: ', task);
      res.end(JSON.stringify(task));
    });
  }
};