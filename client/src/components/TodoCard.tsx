import React from 'react';
import { TodoItem } from './TodoList';

const TodoCard = ({ item, markAsDone, deleteTodo }:
  {item:TodoItem, markAsDone: any, deleteTodo: any}) => (
    <li className={item.isDone === false ? 'todo--incompleted' : 'todo--completed'}>
      <div className="todo--toggle-completed" onClick={() => markAsDone(item.id)}>
        <h3 className="todo__title">{item.title}</h3>
        <p className="todo__body">{item.description}</p>
      </div>
      {item.isDone === true
        && <button type="button" id="btnDeleteTodo" className="todo__button--remove" onClick={() => deleteTodo(item.id)}>Delete</button>}
    </li>
);

export default TodoCard;
