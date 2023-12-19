import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from the backend
    fetch('/employees') // Assuming your backend API is available at this endpoint
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Typography variant="h3" align="center" gutterBottom>
        Employee Management System
      </Typography>
      <EmployeeList employees={employees} />
      <EmployeeForm />
    </Container>
  );
};

export default App;
