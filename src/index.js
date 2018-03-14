import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/App.js';
import Blog from './components/Blog.js';
import NotFound from './components/NotFound.js';
import SignUpPage from './components/SignUpPage.js';
import LoginPage from './components/LoginPage.js';
import SellLandingPage from './components/SellLandingPage.js';
import ListingPage from './components/ListingPage.js'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/error" component={NotFound}/>
    <Route path="/signup" component={SignUpPage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/sell" component={SellLandingPage}/>
    <Route path="/listings" component={ListingPage}/>
  </Router>
), document.getElementById('root'))
