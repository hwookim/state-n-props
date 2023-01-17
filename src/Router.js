import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Color from './pages/Color/Color';
import Counter from './pages/Counter/Counter';
import Toggle from './pages/Toggle/Toggle';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/color" element={<Color />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/toggle" element={<Toggle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
