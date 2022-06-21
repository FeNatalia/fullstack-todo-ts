import React, { FC } from 'react';
import './styles/styles.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/Details';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todos/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
