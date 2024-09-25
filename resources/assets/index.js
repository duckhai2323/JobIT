import React from 'react';
import { createRoot } from 'react-dom/client';
import SignUp from './auth/pages/signup';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <SignUp />
  </>
);
