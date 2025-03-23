import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Feed } from '../component/feed/feed';
import { Login } from '../component/login/login';
import { RoutingBody } from './routing-body';
import { NotFountPage } from '../component/not-found/not-fount-page';

export const RoutingConfiguration = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<RoutingBody />} path="/">
          <Route element={<Login />} path="/login" />
          <Route element={<Feed />} path="/feed" />
          <Route element={<NotFountPage />} path="*" />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};
