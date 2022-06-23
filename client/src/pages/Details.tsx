import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { getItems, getTodo } from '../api';
import { markDone } from '../api/index';
import TodoForm from '../components/TodoForm';
import { DataContext } from '../state/DataProvider';
import { ListItem, TodoItem } from '../ts-utils/interfaces';

const Details = () => {
  const [todo, setTodo] = useState<TodoItem>();
  const { id } = useParams();
  const {items, setItems} = useContext(DataContext);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
      getTodo(id)
        .then(res => {
          setTodo(res);
        });
  }, [id]);

  useEffect(() => {
    getItems(id)
      .then(res => {
        setItems(res);
      });
  }, [id, setItems]);

  return (
    <div className="page-wrapper" id="details-page">
      <header className="header">
        <h2>Details of the list</h2>
      </header>
      {todo === undefined ? "Todo not found" : 
      <div>
        <section className='details-card'>
          <h2 className='details-title'>{todo.title}</h2>
          <p className='details-subtitle'>{todo.description}</p>
          {visible ?
          <button className="btn-update" onClick={() => {markDone(todo); setVisible(false)}}>{todo.isDone === false ? "Mark as done": "Mark not done"}</button> : <p className='update-message'>Updated!</p>}
        </section>
        <TodoForm/>
        {items.length === 0 ? (
          <p className='message-warning'>No todos found! Add by filling the form above. </p>
        ) : (
          items.map((item: ListItem, index: React.Key | null | undefined) => (
            <div className='todo--incompleted' key={index}>
              <h3 className="todo__title">{item.title}</h3>
              <p className="todo__body">{item.description}</p>
            </div>
         ))
        )}
        <div className='todo-under'>
        <Link to={"/"} id="btn-back">Go back</Link>
        </div>
      </div>
      }
    </div>
  )
}

export default Details;
