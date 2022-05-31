import React, { useState } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  return (
    <div>
      <Header />
      <InputTodo addTodo={addTodo} />
      <TodosList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    </div>
  );
};

export default TodoContainer;
