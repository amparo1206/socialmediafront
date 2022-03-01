import { configureStore } from '@reduxjs/toolkit';
import auth from '../Features/auth/authSlice'
import post from '../Features/post/postSlice'
export const store = configureStore({
  reducer: {
    auth,
    post
  },
});