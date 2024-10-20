import React from 'react';
import AuthComponent from './auth';
import { BrowserRouter } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import AdminComponent from './admin';
import CandidateComponent from './candidate';

const App = () => {
  const { authState, remember_token, dataSaveSession } = useAuth();

  let content;
  if (!authState.data && !remember_token && !dataSaveSession) {
    content = <AuthComponent />;
  } else if (authState.data) {
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
