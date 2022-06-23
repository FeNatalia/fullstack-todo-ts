import React, { useContext, useState } from 'react';
import { addItem } from '../api';
import { DataContext } from '../state/DataProvider';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

const TodoForm = () => {
  const {items, setItems} = useContext(DataContext);
  const { id } = useParams();
  const ownerId = id;

  const initialItem = {
    title: '',
    description: '',
    itemId: '',
    owner: '',
    isDone: false,
  };

  const [item, setItem] = useState(initialItem);

  const handleChange = (e: { target: { value: String; name: String | Number | Symbol | any } }) => {
    const { value, name } = e.target;
    setItem({ ...item, [name]: value, itemId: uuidv4(), isDone: false, owner: ownerId || ''});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addItem(item);
    setItems([...items, item]); 
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

export default TodoForm;
