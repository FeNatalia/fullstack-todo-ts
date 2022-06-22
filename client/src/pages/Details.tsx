import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getItems, getTodo } from '../api';
import TodoForm from '../components/TodoForm';
import { DataContext } from '../state/DataProvider';

export interface ListItem {
  title: string,
  description: string,
  itemId: string,
  owner: string,
  _id: string,
}

const Details = () => {
  const [todo, setTodo] = useState<any>([]);
  const { id } = useParams();
  const {items, setItems} = useContext(DataContext);

  useEffect(() => {
      getTodo(id)
        .then(res => {
          setTodo(res);
        });
  }, []);

  useEffect(() => {
    getItems(id)
      .then(res => {
        setItems(res);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <header className="header">
        <h2>Details of the list</h2>
      </header>
      {todo === undefined ? "Todo not found" : 
      <div>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <TodoForm/>
        {items.length === 0 ? (
          <p>No todos found! Add by filling the form above. </p>
        ) : (
          items.map((item: ListItem, index: any) => (
            <div className='todo--incompleted' key={index}>
              <h3 className="todo__title">{item.title}</h3>
              <p className="todo__body">{item.description}</p>
            </div>
         ))
        )}
      </div>
      }
    </div>
  )
}

export default Details