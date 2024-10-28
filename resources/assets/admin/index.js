import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import ListCompany from './pages/listCompany';
import ListAdmin from './pages/listAdmin';

const AdminComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/companies' element={<ListCompany />} />
      <Route path='/admins' element={<ListAdmin />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AdminComponent;
