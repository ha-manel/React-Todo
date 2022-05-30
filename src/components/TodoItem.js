import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const TodoItem = () => (
  <div className="todo-item">
    <div>
      <input type="checkbox" />
      <p className="task-text">wash the car</p>
    </div>
    <FaTrashAlt className="delete-icon" />
  </div>
);

export default TodoItem;
