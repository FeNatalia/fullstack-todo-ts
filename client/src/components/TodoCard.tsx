import React from 'react';
import { TodoItem } from '../pages/Home';

const TodoCard = ({todo, index} : {todo: TodoItem, index: any}) => (
    <li className='todo--incompleted' key={index}>
        <h3 className="todo__title">{todo.title}</h3>
        <p className="todo__body">{todo.description}</p>
    </li>
);

export default TodoCard;
