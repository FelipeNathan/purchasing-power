import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router'
import './index.css';
import App from './App';
import PrivacyPolicy from './component/policy-privacy'
import * as serviceWorker from './serviceWorker'

import './scss/custom.scss';

ReactDOM.render(
    <Router>
      <App path="/" />
      <PrivacyPolicy path="/privacy-policy" />
    </Router>
  ,
  document.getElementById('root')
);

serviceWorker.register();