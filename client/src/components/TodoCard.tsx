import React from 'react';
import { Link } from "react-router-dom";
import { TodoItem } from '../ts-utils/interfaces';

const TodoCard = ({todo, index} : {todo: TodoItem, index: React.Key | null | undefined}) => (
    <li className={todo.isDone === false? 'todo--incompleted' : 'todo--completed'} key={index}>
        <h3 className="todo__title">{todo.title}</h3>
        <p className="todo__body">{todo.description}</p>
        <Link to={`/todos/${todo.todoId}`} className="todo_link">List details</Link>
    </li>
);

export default TodoCard;
