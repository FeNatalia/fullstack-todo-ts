import React, { FC, useState, useEffect } from 'react';
import './styles/styles.css';
import Form from './components/Form';
import { TodoItem, TodoList } from './components/TodoList';
import { getTodos } from './api';

export interface Item {
  message: String;
}

const App: FC = () => {
  const [status, setStatus] = useState(0);

  const [items, setItems] = useState<TodoItem[]>([]);

  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    try {
      getTodos()
        .then(res => {
          setTodos(res);
          setStatus(1);
        });
    } catch {
      setStatus(2);
    }
  }, []);

  // useEffect(() => {
  //   const data = localStorage.getItem('items');
  //   if (data) {
  //     setItems(JSON.parse(data));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);

 const AllTodos = todos.map((todo: TodoItem, index) => (
  <p key={index}>{todo.title} - {todo.description}</p>
 ))

  return (
    <div className="page-wrapper">
      <header className="header">
        <h1 className="header__title">Todo App</h1>
        <h2 className="header__subtitle">We help you to stay organized!</h2>
      </header>
      <Form onSubmit={(itemData: TodoItem) => setItems([...items, itemData])}/>
      <TodoList items={items} setItems={setItems} />
      {status === 0 && <p>⏱ Loading ... ⏱</p>}
      {status === 1 && AllTodos }
      {status === 2 && <p>🚨 Error 🚨</p>}
    </div>
  );
}

export default App;
