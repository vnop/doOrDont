import React from 'react';
import { Task } from './Task.jsx';

class TaskList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map(task => (
            <Task task={task} />
            )
          )}
        </ul>
      </div>
    )
  }
}

export { TaskList }