import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Main/Product';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
