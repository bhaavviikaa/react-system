import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Typography, Grid } from '@mui/material';
import { addEmployee } from '../actions/employeeActions';

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = () => {
    dispatch(addEmployee({ firstName, lastName }));
    // Clear the input boxes after submission
    setFirstName('');
    setLastName('');
    // Add additional logic as needed for form submission
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Add Employee</Typography>
        <form>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: '10px' }}
          >
            Add Employee
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default EmployeeForm;
