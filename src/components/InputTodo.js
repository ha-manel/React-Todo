import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = () => (
  <div id="input-div">
    <input type="text" placeholder="Add todo..." id="todo-input" />
    <FaPlusCircle id="add-icon" />
  </div>
);

export default InputTodo;
