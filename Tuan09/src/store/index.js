import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import todoReducer from './slices/todoSlice';
import themeReducer from './slices/themeSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import userApiReducer from './slices/userApiSlice';
import bmiReducer from './slices/bmiSlice';
import eventReducer from './slices/eventSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: userApiReducer,
    bmi: bmiReducer,
    events: eventReducer,
  }
});

export default store; 