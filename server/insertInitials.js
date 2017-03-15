var db = require('./db/db.js');
var Task = require('./models/task.js');

var dummyData = [
  {
    task: 'Data from DB',
    id: 1
  },
  {
    task: 'DB is working',
    id: 2
  },
  {
    task: 'celebrate?',
    id: 3
  }
];

const saveTaskDb = (todo) => {
  let task = new Task(todo);
  task.save(function(err, task) {
    if (err) {
      return console.log('Initial save to DB error: ', err);
    }
    console.log('Initial save to DB success: ', task);
  });
};

const initiateTasks = (tasks) => {
  tasks.forEach(task => {
    saveTaskDb(task);
  });
};

initiateTasks(dummyData);