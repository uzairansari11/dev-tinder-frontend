import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user-slice';
export const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
