import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

const AuthComponent = () => {
  return (
    <Routes>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/*' element={<Navigate to='/signin' />} />
    </Routes>
  );
};

export default AuthComponent;
