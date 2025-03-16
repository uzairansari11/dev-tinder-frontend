import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../component/nav/nav-bar';

export const RoutingBody = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
