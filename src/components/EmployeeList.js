import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, List, ListItem, ListItemText, Grid } from '@mui/material';

const EmployeeList = () => {
  const employees = useSelector((state) => state.employee);

  return (
    <Grid container spacing={2}> {/* Material-UI Grid container */}
      <Grid item xs={12}>
        <Typography variant="h5">Employee List</Typography>
        <List>
          {employees.map((employee, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${employee.firstName} ${employee.lastName}`} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default EmployeeList;
