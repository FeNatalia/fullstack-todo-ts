import React, { FC, useState, useEffect } from 'react';
import Form from './components/Form';
import { TodoItem, TodoList } from './components/TodoList';

export interface Item {
  message: String;
}

const App: FC = () => {
  const [status, setStatus] = useState(0);
  const [data, setData] = useState<Item[]>([]);

  const [items, setItems] = useState<TodoItem[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('items');
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    try {
      const res = await fetch("/api");
      const result = await res.json();
      await setData([result]);
      console.log('my result', result)
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }

 const Items = data.map((item: Item, index) => (
  <p key={index}>{item.message}</p>
 ))

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form onSubmit={(itemData: TodoItem) => setItems([...items, itemData])}/>
      <TodoList items={items} setItems={setItems} />
      {status === 0 && <p>⏱ Loading ... ⏱</p>}
      {status === 1 && <h2>{Items}</h2>}
      {status === 2 && <p>🚨 Error 🚨</p>}
    </div>
  );
}

export default App;
