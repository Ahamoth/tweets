import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyles.js';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename='/tweets'>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  // </React.StrictMode>
);