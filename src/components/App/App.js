import React, { Component } from 'react';
import '../../stylesheets/style.css';
import { Link } from 'react-router';
import SearchBar from '../../containers/SearchBar/SearchBar.js';
import Navibar from '../../containers/Navibar/Navibar.js';
import FontAwesome from 'react-fontawesome';


class App extends Component {
  render() {
    return (
      <div>
      <div className='app'>
        <Navibar />
        <div className="app-header">
          <h1 className="app-logo"><span role='img'>☕️</span></h1>
          <h1>Welcome to Roastr</h1> <br/>
            <h3 className="app-intro">
              Your favorite free-trade, organic, GMO-free, gluten-free, lactose-free, vegan, crossfit <strong> <span role='img'>☕️</span> Coffee <span role='img'>☕️</span>  </strong> marketplace
            </h3> <br/>
          <h4><strong><Link to='/listings'>Discover</Link></strong> some of the finest coffees from all over the world</h4>
            <FontAwesome
                    className=''
                    name='rocket'
                    size='2x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                  />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
