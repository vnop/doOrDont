import React from 'react';

class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      details: ''
    }
  }

  render() {
    return (<div>
      <input type="text" placeholder="task" />
      <input type="text" placeholder="details" />
      <button className='btn btn-success'>Add Task</button>
      </div>)
  }
}

export { AddTask };