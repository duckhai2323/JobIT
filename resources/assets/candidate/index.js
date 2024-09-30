import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePageCandidate from './pages/home';

const CandidateComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePageCandidate />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default CandidateComponent;
