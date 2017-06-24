import React from 'react';
import { Button, Modal, } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

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
        <button onClick={this.open}>
          Add a product:
        </button>

        <Modal show={this.state.showModal} onHide={this.close}>

          <Modal.Body>

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
              <label>Insert a picture of your product <small>(Optional)</small></label> <br></br>
              <Dropzone />
            </div>


          </form>

          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleSubmit}>Submit</button>
            <button onClick={this.cancel}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
