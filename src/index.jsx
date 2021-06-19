import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './theme/global.css';
import { WebinarProvider } from './providers/WebinarLoader';

ReactDOM.render(
  <React.StrictMode>
    <WebinarProvider>
      <App />
    </WebinarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
