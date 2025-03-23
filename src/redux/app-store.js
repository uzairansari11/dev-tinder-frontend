import { configureStore } from '@reduxjs/toolkit';
import connectionReducer from './slices/connections-slice';
import feedReducer from './slices/feed-slice';
import userReducer from './slices/user-slice';
export const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionReducer,
  },
});
