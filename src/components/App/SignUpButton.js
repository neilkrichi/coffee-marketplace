import React from 'react';
import { Button, Modal, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

class SignUpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      email:'',
      password: '',
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


  getValidationState() {
    const length = this.state.password.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
   alert('Nigga we made it! Here are your credentials ' + this.state.email + " " + this.state.password);
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
              <FormControl type="email"
                name='email'
                value={this.state.email}
                placeholder="Enter your email"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup validationState={this.getValidationState()}>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password"
                name='password'
                value={this.state.password}
                placeholder="Choose a password"
                onChange={this.handleInputChange}/>
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>


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
