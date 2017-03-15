import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Router, Route, Redirect } from 'react-router';
import { AddTask } from './AddTask.jsx';
import { TaskList } from './TaskList.jsx';

var dummyData = [
  {
    task: 'DB is down',
    id: 1
  },
  {
    task: 'check DB',
    id: 2
  },
  {
    task: 'check request',
    id: 3
  }
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: dummyData
    }
  }

  componentWillMount() {
    var self = this;
    $.ajax({
      url: 'http://localhost:3000/tasks',
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('success: ', data);
        self.setState({
          tasks: data
        });
      },
      error: (err, status) => {
        console.log('error: ', err);
      }
    });
  }

  addNewTask(task) {
    if (this.state.tasks.length === 0) {
      var counter = 1;
    } else {
      var counter = this.state.tasks[this.state.tasks.length - 1].id + 1;
    }
    task.id = counter;
    saveTask(task);
    this.setState({
      tasks: this.state.tasks.concat(task)
    });
  }

  removeTask(todo) {
    deleteTask(todo, this.state.tasks);
    this.setState({
      tasks: this.state.tasks.filter(function(task) { return task.task !== todo; })
    });
  }

  render() {
    return (
      <div>
        <h1>Get It Done List</h1>
        <AddTask addNewTask={this.addNewTask.bind(this)} />
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// helper functions

var saveTask = function(task) {
  $.ajax({
    url: 'http://localhost:3000/tasks',
    method: 'POST',
    data: task,
    success: (data) => {
      console.log('Success! Added to DB:', data);
    },
    error: (err, status) => {
      console.log('error, not added to DB:', err);
    }
    })
};

var deleteTask = function(task, list) {
  var targetTask = list.findIndex(function(todo) {
    return todo.task === task;
  });
  var taskId = list[targetTask].id;
  $.ajax({
    url: 'http://localhost:3000/tasks?value=' + taskId,
    method: 'DELETE',
    success: (data) => {
      console.log('DB delete successful: ', data);
    },
    error: (err, status) => {
      console.log('DB delete error: ', err);
    }
  });
};