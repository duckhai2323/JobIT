import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePageCandidate from './pages/home';
import JobDetailsPageCandidate from './pages/job_detail';

const CandidateComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePageCandidate />} />
      <Route path='/jobdetail' element={<JobDetailsPageCandidate />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default CandidateComponent;
