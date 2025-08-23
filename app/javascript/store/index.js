import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
import rulesReducer from './rulesSlice.js';
import pageReducer from './pageSlice.js';

export default configureStore({
  reducer: {
    auth: authReducer,
    rules: rulesReducer,
    page: pageReducer,
  },
});
