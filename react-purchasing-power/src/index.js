import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router'
import './index.css';
import App from './App';
import PrivacyPolicy from './component/policy-privacy'
import Header from './component/header'
import * as serviceWorker from './serviceWorker'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <Header />
    <div className="content">
      <Router>
        <App path="/" />
        <PrivacyPolicy path="/privacy-policy" />
      </Router>
    </div>
  </>
  ,
  document.getElementById('root')
);

serviceWorker.register();