import React from 'react';
import AuthComponent from './auth';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <AuthComponent />
    </BrowserRouter>
  );
};

export default App;
