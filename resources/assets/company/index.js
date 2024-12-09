import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import CompanyDetail from './pages/companyDetail';
import ListHr from './pages/listHr';
import ListJob from './pages/listJob';

const CompanyComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/*' element={<Navigate to='/' />} />
      <Route path='/company-detail' element={<CompanyDetail />} />
      <Route path='/employees' element={<ListHr />} />
      <Route path='/jobs' element={<ListJob />} />
    </Routes>
  );
};

export default CompanyComponent;
