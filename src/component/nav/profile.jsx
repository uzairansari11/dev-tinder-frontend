import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axiosInstance, { endPoints } from '../../api/axios';
import { removeUser, userSelector } from '../../redux/slices/user-slice';

export const Profile = () => {
  const user = useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      await axiosInstance.post(endPoints.auth.logout, {});
      dispatch(removeUser());
      return navigate('/login');
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      {user ? (
        <div className="flex gap-2 items-center">
          <p className="capitalize">Welcome, {user.firstName}</p>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Profile" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <button >Settings</button>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};
