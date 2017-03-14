import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Router, Route, Redirect } from 'react-router';
import { AddTask } from './AddTask.jsx';
import { TaskList } from './TaskList.jsx';

var dummyData = [
  {
    task: 'work on client side',
    details: 'have client add a task',
    id: 1
  },
  {
    task: 'work on server side',
    details: 'have server send data to client',
    id: 2
  },
  {
    task: 'work on database',
    details: 'create schema, model, and initiate it',
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

  render() {
    return (
      <div>
        <h1>Do List</h1>
        <AddTask addNewTask={this.state.tasks[0]} />
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));