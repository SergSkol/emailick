import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import messageReducer from './messages/messages';

const store = configureStore({
  reducer: {
    message: messageReducer,
    category: categoriesReducer,
  },
});

export default store;
