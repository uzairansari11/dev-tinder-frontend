import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axiosInstance, { endPoints } from '../../api/axios';
import { addUser, userSelector } from '../../redux/slices/user-slice';

export const Login = () => {
  const [credential, setCredential] = useState({
    email: '',
    password: '',
    isSubmitting: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const handleLogin = async () => {
    setCredential((prev) => ({ ...prev, isSubmitting: true }));
    try {
      const response = await axiosInstance.post(
        endPoints.auth.login,
        credential,
      );
      dispatch(addUser(response.data));
      navigate('/feed', { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setCredential((prev) => ({ ...prev, isSubmitting: false }));
    }
  };
  useLayoutEffect(() => {
    if (user) {
      navigate('/feed', { replace: true });
    }
  }, [navigate, user]);
  return (
    <div className="card bg-base-100 w-96 shadow-sm px-2 py-4 flex column  mt-2 m-auto items-center gap-5">
      <label>Login To DevTinder</label>
      <label className="input validator">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </g>
        </svg>

        <input
          type="email"
          required
          placeholder="mail@site.com"
          value={credential.email}
          onChange={(e) =>
            setCredential((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </label>

      <label className="input validator">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </g>
        </svg>
        <input
          type="password"
          required
          placeholder="Password"
          minlength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          onChange={(e) =>
            setCredential((prev) => ({ ...prev, password: e.target.value }))
          }
        />
      </label>

      <button
        className="btn btn-wide btn-dash btn-primary btn-lg"
        onClick={handleLogin}
      >
        <span
          className={credential.isSubmitting ? 'loading loading-spinner' : null}
        ></span>
        Login
      </button>
    </div>
  );
};
