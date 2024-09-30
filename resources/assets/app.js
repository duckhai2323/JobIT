import React from 'react';
import AuthComponent from './auth';
import { BrowserRouter } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import AdminComponent from './admin';
import CandidateComponent from './candidate';

const App = () => {
  const { authState } = useAuth();
  const remember_token = JSON.parse(localStorage.getItem('remember_token'));

  let content;
  if (!authState.data && !remember_token) {
    content = <AuthComponent />;
  } else if (authState.data) {
    console.log(authState.data.data.role);
    switch (authState.data.data.role) {
      case '0':
        content = <CandidateComponent />;
        break;
      case '1':
        content = <AdminComponent />;
        break;
      default:
        content = <CandidateComponent />;
    }
  } else content = <div>Loading...</div>;
  return <BrowserRouter>{content}</BrowserRouter>;
};

export default App;
