import React from 'react';

const Task = ({ task, deleteTask }) => {
  return (
    <div>
      <li onClick={function(e) { return deleteTask(task.task); }}>
      Task: {task.task}
      </li>
    </div>
  )
};

export { Task }