import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/index.js';
import About from './components/About/index.js';
import NotFound from './components/NotFound/index.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/dude" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/error" component={NotFound}/>
  </Router>
), document.getElementById('root'))
