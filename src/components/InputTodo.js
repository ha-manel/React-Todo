/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form id="input-form" onSubmit={formSubmit}>
      <input type="text" placeholder="Add todo..." id="todo-input" value={title} onChange={onChange} />
      <button type="button" id="add-icon">
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;
