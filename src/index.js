import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './App';
import './assets/css/icomoon.css';

axios.defaults.baseURL = process.env.REACT_APP_BAR_AXIOS_BASE_URL;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
