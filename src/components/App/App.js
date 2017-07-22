import React, { Component } from 'react';
import '../../stylesheets/style.css';
import { Link } from 'react-router';
import SearchBar from '../../containers/SearchBar/SearchBar.js';
import Navibar from '../../containers/Navibar/Navibar.js';
import Footer from '../../containers/Footer/Footer.js';
import FontAwesome from 'react-fontawesome';
import TypeOut from 'react-typeout';

const words = ['free-trade', 'organic', 'GMO-free', 'gluten-free', 'lactose-free', 'vegan', 'crossfit'];

class App extends Component {
  render() {
    return (
      <div>
        <div className='app'>
          <Navibar />
          <div className="app-header">
            <video className='bg-video' autoPlay muted loop>
              <source src='/videos/bgvideo.mp4' type="video/mp4"></source>
            </video>
            <div className='bg-video-overlay'>
            </div>
            <div className="intro-text">
              <img className="app-logo" src="../favicon.png" />
              <h1>Welcome to Roastr</h1> <br/>
              <h3 className="app-intro">
                Your favorite <TypeOut words={words} typeSpeed={100} /> <strong> <span role='img'>☕️</span> Coffee <span role='img'>☕️</span>  </strong> marketplace
              </h3> <br/>
            <button className="cta-button"><Link to='/listings'>Shop our products</Link></button>
            </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }

  export default App;
