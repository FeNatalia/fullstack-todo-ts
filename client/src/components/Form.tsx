import React, { useState } from 'react';
import { addTodo } from '../api';

const Form = ({ onSubmit }:{onSubmit: any }) => {
  const initialItem = {
    title: '',
    description: ''
  };

  const [item, setItem] = useState(initialItem);

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(item);
    onSubmit(item); 
    setItem(initialItem);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form__title">Register New Todo</h3>
      <label htmlFor="txtTodoItemToAdd" className="form__label-title">
        Title
        <input
          className="form__new-todo-title"
          id="txtTodoItemToAdd"
          type="text"
          name="title"
          value={item.title}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="bodyTodoItemToAdd" className="form__label-description">
        Description
        <input
          className="form__new-todo-body"
          id="bodyTodoItemToAdd"
          name="description"
          type="text"
          value={item.description}
          onChange={handleChange}
        />
      </label>
      <button className="todo__button--add" id="btnAddTodo" type="submit">Add todo</button>
    </form>
  );
};

export default Form;
