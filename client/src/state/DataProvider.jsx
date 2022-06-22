import React, { createContext, useState } from 'react';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const value = { todos, setTodos };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};