/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({ todos, deleteTodo, checkTodo }) => (
  <div id="todos-list">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    ))}
  </div>
);

export default TodosList;
