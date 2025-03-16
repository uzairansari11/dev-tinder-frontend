import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutingBody } from './routing-body';

export const RoutingConfiguration = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<RoutingBody />} path="/">
          <Route element={<div>Login Page</div>} path="/login" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
