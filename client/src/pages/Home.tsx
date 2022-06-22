import React, { FC, useEffect, useContext } from 'react';
import ListForm from '../components/ListForm';
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
        <h1 className="header__title">Organize App</h1>
        <h2 className="header__subtitle">We help you to save your lists with todos!</h2>
      </header>
      <ListForm />
      {todos.length === 0 ? (
          <p>No lists found!</p>
        ) : (
          todos.map((todo: TodoItem, index: any) => (
            <TodoCard key={index} todo={todo} index={index}/>
         ))
        )}
    </div>
  );
}

export default Home;
