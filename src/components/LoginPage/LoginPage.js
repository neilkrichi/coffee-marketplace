import React, { Component } from 'react';
import '../../stylesheets/style.css';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password: '',
      emailError: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);

  }

  getValidationState() {
    const length = this.state.password.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  validateEmail(){
    if (this.state.email === '') {
      this.setState({emailError: ''})
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}$/i.test(this.state.email)) {
      this.setState({emailError: 'error'})
    }else{
      this.setState({emailError: 'nice'})
    }
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('Nigga we made it! Here are your credentials ' + this.state.email + " " + this.state.password);
    event.preventDefault();
  }

  renderPasswordError(){
    if(this.getValidationState() === 'success'){
      return (<span>Looks good</span>)
    }else if (this.getValidationState() === 'warning') {
      return (<span>Not that great</span>)
    }else if (this.getValidationState() === 'error') {
      return (<span>Sucks dude</span>)
    }
  }

  render() {
    return (
      <div className='SignUp'>
        <h1>
          Log in
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className={this.state.emailError}>
            <input name='email'
              onBlur={this.validateEmail}
              value={this.state.email}
              placeholder="Enter your email"
              onChange={this.handleInputChange}/>
          </div>

          <div className={this.getValidationState()}>
            <input name='password'
              type='password'
              value={this.state.password}
              placeholder="Enter your password"
              onChange={this.handleInputChange}/>
            {this.renderPasswordError()}
          </div>
          <button type="submit">
            Sign me up
          </button>
        </form>
      </div>
    );
  }
}
