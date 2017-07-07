import React, { Component } from 'react';
import '../../stylesheets/style.css';
import { Link } from 'react-router';
import SearchBar from '../../containers/SearchBar/SearchBar.js';
import Navibar from '../../containers/Navibar/Navibar.js';


class App extends Component {
  render() {
    return (
      <div>
      <div className='app'>
        <Navibar />
        <div className="app-header">

          <h1 className="app-logo"><span role='img'>☕️</span></h1>
          <h2>Welcome to Roastr</h2>
            <p className="app-intro">
              Your favorite free-trade, organic, GMO-free, gluten-free, lactose-free, vegan, crossfit <strong> <span role='img'>☕️</span> Coffee <span role='img'>☕️</span>  </strong> marketplace
            </p>
            <SearchBar />

        </div>
      </div>
    </div>
    );
  }
}

export default App;
