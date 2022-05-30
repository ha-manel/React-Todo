import React from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => (
  <div>
    <Header />
    <InputTodo />
    <TodosList />
  </div>
);

export default TodoContainer;
