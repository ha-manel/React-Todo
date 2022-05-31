/* eslint-disable react/prop-types */
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const TodoItem = ({ todo, deleteTodo, checkTodo }) => {
  const checkedStyle = {
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <div className="todo-item">
      <div>
        <input type="checkbox" checked={todo.completed} onChange={() => checkTodo(todo.id)} />
        <p className="task-text" style={todo.completed ? checkedStyle : null}>{todo.title}</p>
      </div>
      <FaTrashAlt className="delete-icon" onClick={() => deleteTodo(todo.id)} />
    </div>
  );
};

export default TodoItem;
