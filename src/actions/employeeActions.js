// Define Redux actions for employee management
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    // Add other actions as needed
  },
});

export const { addEmployee } = employeeSlice.actions;  // Export the generated action creators
export default employeeSlice.reducer;
