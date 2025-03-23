import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import axiosInstance, { endPoints } from '../api/axios';
import { Footer } from '../component/footer/footer';
import { Navbar } from '../component/nav/nav-bar';
import { addUser } from '../redux/slices/user-slice';

export const RoutingBody = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = useCallback(async () => {
    try {
      const response = await axiosInstance.get(endPoints.user.profile);
      const data = response.data;
      dispatch(addUser(data));
    } catch (error) {
      if (error.status === 401) navigate('/login');
      console.error(error);
    }
  }, [dispatch, navigate]);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
