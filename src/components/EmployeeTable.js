// src/components/EmployeeTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const EmployeeTable = ({ employees }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Status</TableCell>
            {/* Add more columns as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.firstName}</TableCell>
              <TableCell>{employee.lastName}</TableCell>
              <TableCell>{employee.designation}</TableCell>
              <TableCell>{employee.salary}</TableCell>
              <TableCell>{employee.location}</TableCell>
              <TableCell>{employee.status}</TableCell>
              {/* Add more cells for additional fields */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
