import React from 'react';
import { Button, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class SignUpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      email:'',
      password: ''
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
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


  getValidationState() {
    const length = this.state.password.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ email: e.target.value, password: e.target.value });

  }

  handleSubmit(event) {
   alert('Nigga we made it!');
   event.preventDefault();
 }

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="medium" onClick={this.open}>
          Sign Up
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>

          <Modal.Body>
            <FormGroup>
              <ControlLabel>E-mail</ControlLabel>
              <FormControl type="text"
                value={this.state.value}
                placeholder="Enter your email"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup validationState={this.getValidationState()}>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password"
                value={this.state.value}
                placeholder="Choose a password"
                onChange={this.handleChange}
              />

            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.handleSubmit}>Sign me up!</Button>
            <Button onClick={this.cancel}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default SignUpButton;
