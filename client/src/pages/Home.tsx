import React, { useEffect, useContext } from 'react';
import ListForm from '../components/ListForm';
import { getTodos } from '../api';
import TodoCard from '../components/TodoCard';
import { DataContext } from '../state/DataProvider';
import { TodoItem } from '../ts-utils/interfaces';

const Home = () => {
  const {todos, setTodos} = useContext(DataContext);

  useEffect(() => {
      getTodos()
        .then(res => {
          setTodos(res);
        });
  }, [setTodos]);

  return (
    <div className="page-wrapper">
      <header className="header">
        <h1 className="header__title">Organize App</h1>
        <h2 className="header__subtitle">We help you to save your lists with todos!</h2>
      </header>
      <ListForm />
      {todos.length === 0 ? (
          <p className='message-warning'>No lists found! Add by filling the form above</p>
        ) : (
          todos.map((todo: TodoItem, index: React.Key | null | undefined) => (
            <TodoCard key={index} todo={todo} index={index}/>
         ))
        )}
    </div>
  );
}

export default Home;
