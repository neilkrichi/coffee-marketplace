import React, { PropTypes, Component } from 'react';
import { Button, Modal, } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import ReactFilepicker from 'react-filepicker';
import Collapsible from 'react-collapsible';

import './style.css';


export default class CreateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name:'',
      tasteTone: '',
      description: ''
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  open() {
    this.setState( {
      showModal: true,

    });
  }
  close() {
    this.setState( { showModal: false } );
  }


  cancel() {
    this.close();
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
   alert('Awesome! You created ' + this.name);
   event.preventDefault();
 }

  onDrop(acceptedFiles, rejectedFiles) {
  // do stuff with files...
  }

  render() {
    return (
      <div>

    {/*    <button onClick={this.open}>
          Add a product:
        </button> */}

        <Collapsible trigger="Add a product:">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Product name</label> <br></br>
              <input type="text"
                name='name'
                value={this.state.name}
                placeholder="e.g. Kenyan Dark Roast whatever"
                onChange={this.handleInputChange}
              />
            </div>

            <div>
              <label>Taste tone</label> <br></br>
              <select>
                <option value="bitter">Bitter</option>
                <option value="sweet">Sweet</option>
                <option selected value="fruit notes">Fruit notes</option>
                <option value="flower notes">Flower notes</option>
                <option value="herbal notes">Herbal notes</option>
              </select>
            </div>

            <div>
              <label>Description</label> <br></br>
              <textarea name='description'
                placeholder="Describe your product in a few sentences..."
                rows="5"
                onChange={this.handleInputChange}>
                {this.state.description}
              </textarea>
            </div>

            <div className="img">
              <label>Insert a picture of your product <small>(Optional)</small></label>
                <br></br>
              <ReactFilepicker
                apikey='AFsy23APnSR63IRmWVWlGz'
                defaultWidget={false}
                onSuccess={this.close} />
            </div>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </form>
        </Collapsible>
      </div>
    )
  }
}
