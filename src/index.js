import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ErrorBoundry from './components/errorBoundry';
import App from './components/app';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById('root')
);
