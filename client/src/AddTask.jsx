import React from 'react';

class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ''
    }
  }

  handleTask(event) {
    this.setState({
      task: event.target.value
    });
  }

  addTask() {
    if (this.state.task !== '') {
      this.props.addNewTask(this.state);
      this.setState({
        task: ''
      });
    } else {
      console.log('Missing info, check all fields');
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="task" value={this.state.task} onChange={this.handleTask.bind(this)}/>
        <button className='btn btn-primary' onClick={this.addTask.bind(this)}>Add Task</button>
      </div>
    )
  }
}

export { AddTask }