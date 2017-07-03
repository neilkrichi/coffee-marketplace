import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App.js';
import About from './components/About/About.js';
import NotFound from './components/NotFound/NotFound.js';
import SignUpPage from './components/SignUpPage/SignUpPage.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import SellLandingPage from './components/SellLandingPage/SellLandingPage.js';
import ListingPage from './components/ListingPage/ListingPage.js'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/home" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/error" component={NotFound}/>
    <Route path="/signup" component={SignUpPage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/sell" component={SellLandingPage}/>
    <Route path="/listings" component={ListingPage}/>
  </Router>
), document.getElementById('root'))
