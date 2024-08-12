import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeView from '../EmployeeView/EmployeeView';
import { Typography } from '@mui/material';
// import EmployeeView from './EmployeeView';

const EmployeeListPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/employees/getAll');
        setEmployees(response.data);
        console.log(employees);
      } catch (err) {
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return <EmployeeView employees={employees} />;
};

export default EmployeeListPage;
