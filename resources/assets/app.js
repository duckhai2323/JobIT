import React from 'react';
import AuthComponent from './auth';
import { BrowserRouter } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import AdminComponent from './admin';

const App = () => {
  const { authState } = useAuth();
  const remember_token = JSON.parse(localStorage.getItem('remember_token'));

  return <BrowserRouter>{!authState.data && !remember_token ? <AuthComponent /> : <AdminComponent />}</BrowserRouter>;
};

export default App;
