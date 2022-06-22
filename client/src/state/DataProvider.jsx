import React, { createContext, useState } from 'react';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [items, setItems] = useState([]);
  const value = { todos, setTodos, items, setItems };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};