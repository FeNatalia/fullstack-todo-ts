import React, { FC } from 'react';
import './styles/styles.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import { DataProvider } from './state/DataProvider';

const App: FC = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todos/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
