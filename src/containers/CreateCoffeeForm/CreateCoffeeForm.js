import React from 'react';
import Collapsible from 'react-collapsible';
import axios from 'axios';
import filepickerLibrary from 'filepicker-js';
import '../../stylesheets/style.css';
import { browserHistory, Link } from 'react-router';
import {Row, Col} from 'react-bootstrap';


let filepicker = window.filepicker

filepicker.setKey('AFsy23APnSR63IRmWVWlGz');


export default class CreateCoffeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      tasteTone: 'Select a tone',
      roastingLevel: 'Select a roasting level',
      description: '',
      imgUrl: '',
      website: '',
      coffeeID: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pickFile = this.pickFile.bind(this);
    this.hideImg = this.hideImg.bind(this);
  }

  addCoffee(){

    let coffeeData = {
      name: this.state.name,
      description: this.state.description,
      tones: this.state.tasteTone,
      img: this.state.imgUrl,
      roastingLevel: this.state.roastingLevel,
      url: this.state.website,
      _id: this.state.coffeeID
    }


    // pass the actual values to make this POST CALL
    return axios.post('https://cocoapi.herokuapp.com/add/coffee', coffeeData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name === '' || this.state.description === '' || this.state.imgUrl === '' || this.state.website === '') {
      alert('Please fill out all required fields');
    }
    else {
      this.addCoffee();
      browserHistory.push('/home');
    }
  }

  pickFile(){
    filepicker.pick(
      {
        cropRatio: 1/1,
        mimetype: 'image/*',
        services: ['CONVERT', 'COMPUTER'],
        conversions: ['crop', 'rotate', 'filter'],
        cropMin: [400, 400]
      },
      (Blob) => {
        this.setState({imgUrl: Blob.url});
      }
    )
  }

  hideImg(){
    if (this.state.imgUrl === ''){
      return ("hide")
    }
  }

  render() {
    return (
      <div className="create-form">
        <form onSubmit={this.handleSubmit}>
        <Row>
          <Col md={4}><label>Product name <small>*</small></label></Col>
          <Col md={8}>
              <div>
                <input type="text"
                  name='name'
                  value={this.state.name}
                  placeholder="e.g. Kenyan Dark Roast whatever"
                  onChange={this.handleInputChange}
                  />
              </div>
            </Col>
          </Row>


          <Row>
            <Col md={4}><label>Taste tone <small>*</small></label></Col>
            <Col md={8}>
              <div>
                <select name='tasteTone' value={this.state.tasteTone} onChange={this.handleInputChange}>
                  <option tasteTone="bitter">Bitter</option>
                  <option tasteTone="sweet">Sweet</option>
                  <option tasteTone="fruit notes">Fruit notes</option>
                  <option tasteTone="flower notes">Flower notes</option>
                  <option tasteTone="herbal notes">Herbal notes</option>
                </select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}><label>Roasting Level <small>*</small></label></Col>
            <Col md={8}>
              <div>
                <select name='roastingLevel' value={this.state.roastingLevel} onChange={this.handleInputChange}>
                  <option roastingLevel="light">Light</option>
                  <option roastingLevel="medium">Medium</option>
                  <option roastingLevel="medium dark">Medium Dark</option>
                  <option roastingLevel="dark">Dark</option>
                  <option roastingLevel="darker">Darker</option>
                  <option roastingLevel="very dark">Very dark</option>
                </select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}> <label>Description <small>*</small></label> </Col>
            <Col md={8}>
              <div>
                <textarea name='description'
                  placeholder="Describe your product in a few sentences..."
                  rows="5"
                  onChange={this.handleInputChange}
                  value={this.state.description}> </textarea>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}><label>Website <small>*</small></label></Col>
            <Col md={8}>
              <div>
                <input type="text"
                  name='website'
                  value={this.state.website}
                  placeholder="Add a link to your website"
                  onChange={this.handleInputChange}
                  />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}><label>Insert a picture of your product <small>*</small></label></Col>
            <Col md={8}>
              <div className="img">
                <button type='button' className='choose-img' onClick={this.pickFile}>Choose your img</button>
                <br></br>
                <img alt="" className={this.hideImg()} src={this.state.imgUrl} style={{width:'400px', height:'400px'}} />
              </div>
            </Col>
          </Row>
          <button type="submit" className='submit-form' onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
