import React from 'react';
import { Task } from './Task.jsx';

class TaskList extends React.Component {
  constructor(props) {
    super(props)
  }

  deleteTask(todo) {
    this.props.removeTask(todo);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map(task => (
            <Task
            task={task}
            deleteTask={this.deleteTask.bind(this)}
            />
            )
          )}
        </ul>
      </div>
    )
  }
}

export { TaskList }