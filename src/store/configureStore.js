// Configure the Redux store using Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../reducers/employeeReducer';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    // Add other reducers as needed
  },
});

export default store;
