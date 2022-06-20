import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ onSubmit }:{onSubmit: any}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: uuidv4(),
      title,
      description,
      isDone: false,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form className="form">
      <h3 className="form__title">Register New Todo</h3>
      <label htmlFor="txtTodoItemToAdd" className="form__label-title">
        Title
        <input
          className="form__new-todo-title"
          id="txtTodoItemToAdd"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
        />
      </label>
      <label htmlFor="bodyTodoItemToAdd" className="form__label-description">
        Description
        <input
          className="form__new-todo-body"
          id="bodyTodoItemToAdd"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
        />
      </label>
      <button className="todo__button--add" id="btnAddTodo" type="button" onClick={handleSubmit}>Add todo</button>
    </form>
  );
};

export default Form;
