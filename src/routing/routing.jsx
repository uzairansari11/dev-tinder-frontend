import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Connections } from '../component/connections/connections';
import { Feed } from '../component/feed/feed';
import { Login } from '../component/login/login';
import { NotFountPage } from '../component/not-found/not-fount-page';
import { Requests } from '../component/requests/requests';
import { RoutingBody } from './routing-body';

export const RoutingConfiguration = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<RoutingBody />} path="/" >
          <Route element={<Login />} path="/login" />
          <Route element={<Feed />} path="/feed" />
          <Route element={<Connections />} path="/connections" />
          <Route element={<Requests />} path="/requests" />

          <Route element={<NotFountPage />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
