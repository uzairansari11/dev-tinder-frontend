import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
  withCredentials: true,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Get the token from cookies if needed for additional auth methods
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];

    // If token exists, add it to auth header (if your API requires this alongside cookies)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export const endPoints = {
  auth: {
    login: '/auth/login',
    logout:"/auth/logout"
  },
  user:{
    profile:"/profile/view"
  }
};
export default axiosInstance;
