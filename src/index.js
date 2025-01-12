import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Your global styles or Tailwind setup

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure this matches the ID in public/index.html
);
