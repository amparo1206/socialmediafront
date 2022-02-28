import { configureStore } from '@reduxjs/toolkit';
import auth from '../Features/auth/authSlice'
export const store = configureStore({
  reducer: {
    auth
  },
});