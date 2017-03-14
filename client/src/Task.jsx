import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <li>
      Task: {task.task}
      </li>
    </div>
  )
};

export { Task }