import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePageCandidate from './pages/home';
import JobDetailsPageCandidate from './pages/job_detail';
import CompanyInforPageCandidate from './pages/company_infor';
import RecommendJobPage from './pages/recommend';
import ListCompaniesPage from './pages/list-companies';

const CandidateComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePageCandidate />} />
      <Route path='/company-infor/:company_id' element={<CompanyInforPageCandidate />} />
      <Route path='/jobdetail/:job_id' element={<JobDetailsPageCandidate />} />
      <Route path='/recommend' element={<RecommendJobPage />} />
      <Route path='/list-companies' element={<ListCompaniesPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default CandidateComponent;
