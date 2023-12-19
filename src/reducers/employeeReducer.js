// Redux reducer for employee-related actions
import { createReducer } from '@reduxjs/toolkit';
import { addEmployee } from '../actions/employeeActions';

const initialState = [];

const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    state.push(action.payload);
  });
  // Add other cases as needed
});

export default employeeReducer;
