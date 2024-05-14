import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messages';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
