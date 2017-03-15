var mongoose = require('mongoose');

var taskSchema = {
  task: String,
  id: Number
};

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;