import React from 'react';
import TodoCard from './TodoCard';

export interface TodoItem {
    title: string,
    description: string,
    isDone: boolean,
    id: string,
}

export const TodoList = ({ items, setItems }:{items:TodoItem[], setItems: any}) => {
  const markAsDone = (id: string) => {
    const newItems = [...items].map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setItems(newItems);
  };

  const deleteTodo = (id: string) => {
    const newIts = [...items].filter((item) => item.id !== id);
    setItems(newIts);
  };

  const UncompletedTodos = items
    .filter((item: TodoItem) => item.isDone === false)
    .map((item: TodoItem) => (
      <TodoCard key={item.id} item={item} markAsDone={markAsDone} deleteTodo={deleteTodo} />
    ));

  const CompletedTodos = items
    .filter((item: TodoItem) => item.isDone === true)
    .map((item: TodoItem) => (
      <TodoCard key={item.id} item={item} markAsDone={markAsDone} deleteTodo={deleteTodo} />
    ));

  return (
    <ul className="todo-list" id="todoList">
      {UncompletedTodos}
      {CompletedTodos}
    </ul>
  );
};
