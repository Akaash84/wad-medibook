// // import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// // import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//     <App />
//   // </StrictMode>,
// )
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { UserProvider } from './components/first/UserContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
  </UserProvider>
);
