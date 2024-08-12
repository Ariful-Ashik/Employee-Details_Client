// EmployeeView.jsx
import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const EmployeeView = ({ employees }) => {
  if (!employees || employees.length === 0) {
    return <Typography>No employee data available</Typography>;
  }

  return (
    <Container>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          Employee List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant="h6">Name</Typography></TableCell>
                <TableCell><Typography variant="h6">Phone</Typography></TableCell>
                <TableCell><Typography variant="h6">Email</Typography></TableCell>
                <TableCell><Typography variant="h6">Address</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map(employee => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default EmployeeView;
