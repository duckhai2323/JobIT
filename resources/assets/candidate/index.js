import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePageCandidate from './pages/home';
import JobDetailsPageCandidate from './pages/job_detail';
import CompanyInforPageCandidate from './pages/company_infor';

const CandidateComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePageCandidate />} />
      <Route path='/company-infor' element={<CompanyInforPageCandidate />} />
      <Route path='/jobdetail' element={<JobDetailsPageCandidate />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default CandidateComponent;
