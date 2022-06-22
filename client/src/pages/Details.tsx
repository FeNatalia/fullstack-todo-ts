import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getTodo } from '../api';

const Details = () => {
  const [todo, setTodo] = useState<any>([]);
  const { id } = useParams();

  useEffect(() => {
      getTodo(id)
        .then(res => {
          setTodo(res);
        });
  }, []);

  return (
    <div>
      <h2>Details of the list</h2>
      {todo === undefined ? "Todo not found" : 
      <div>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      }
    </div>
  )
}

export default Details