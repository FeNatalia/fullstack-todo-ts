import React, { FC, useState, useEffect } from 'react';
import Form from '../components/Form';
import { getTodos } from '../api';
import TodoCard from '../components/TodoCard';

export interface TodoItem {
    title: string,
    description: string
}

const Home: FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
      getTodos()
        .then(res => {
          setTodos(res);
        });
  }, []);

 const AllTodos = todos.map((todo: TodoItem, index) => (
    <TodoCard key={index} todo={todo} index={index}/>
 ))

  return (
    <div className="page-wrapper">
      <header className="header">
        <h1 className="header__title">Todo App</h1>
        <h2 className="header__subtitle">We help you to stay organized!</h2>
      </header>
      <Form onSubmit={(itemData: TodoItem) => {setTodos([...todos, itemData])}} />
      <ul className="todo-list" id="todoList">
        {AllTodos}
      </ul>
    </div>
  );
}

export default Home;
