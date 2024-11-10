import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import ListCompany from './pages/listCompany';
import ListAdmin from './pages/listAdmin';
import ListJob from './pages/listJob';
import JobDetail from './pages/jobDetail';

const AdminComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/companies' element={<ListCompany />} />
      <Route path='/admins' element={<ListAdmin />} />
      <Route path='/jobs' element={<ListJob />} />
      <Route path='/jobs/:jobId' element={<JobDetail />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AdminComponent;
