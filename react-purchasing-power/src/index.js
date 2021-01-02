import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router'
import './index.css';
import App from './App';
import BigMacIndex from './component/big-mac-index'
import NationalPurchasingPower from './component/national-purchasing-power'
import PrivacyPolicy from './component/policy-privacy'
import * as serviceWorker from './serviceWorker'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <Router>
      <App path="/" />
      <BigMacIndex path="/big-max-index" />
      <NationalPurchasingPower path="/ppp" />
      <PrivacyPolicy path="/privacy-policy" />
    </Router>
  </>
  ,
  document.getElementById('root')
);

serviceWorker.register();