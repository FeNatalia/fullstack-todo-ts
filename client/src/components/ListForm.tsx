import React, { useContext, useState } from 'react';
import { addTodo } from '../api';
import { DataContext } from '../state/DataProvider';
import { v4 as uuidv4 } from 'uuid';

const ListForm = () => {
  const {todos, setTodos} = useContext(DataContext);

  const initialItem = {
    title: '',
    description: '',
    todoId: '',
  };

  const [item, setItem] = useState(initialItem);

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setItem({ ...item, [name]: value, todoId: uuidv4() });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(item);
    setTodos([...todos, item]); 
    setItem(initialItem);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form__title">Register New List</h3>
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

export default ListForm;
