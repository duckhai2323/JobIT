import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';

const AdminComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AdminComponent;
