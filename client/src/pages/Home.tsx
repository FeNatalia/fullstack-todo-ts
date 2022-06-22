import React, { FC, useState, useEffect, useContext } from 'react';
import Form from '../components/Form';
import { getTodos } from '../api';
import TodoCard from '../components/TodoCard';
import { DataContext } from '../state/DataProvider';

export interface TodoItem {
  title: string,
  description: string,
  todoId: string,
  _id: string,
}

const Home: FC = () => {
  const {todos, setTodos} = useContext(DataContext);

  useEffect(() => {
      getTodos()
        .then(res => {
          setTodos(res);
        });
  }, []);

  return (
    <div className="page-wrapper">
      <header className="header">
        <h1 className="header__title">Todo App</h1>
        <h2 className="header__subtitle">We help you to stay organized!</h2>
      </header>
      <Form />
      {todos.length === 0 ? (
          <p>No items found!</p>
        ) : (
          todos.map((todo: TodoItem, index: any) => (
            <TodoCard key={index} todo={todo} index={index}/>
         ))
        )}
    </div>
  );
}

export default Home;
