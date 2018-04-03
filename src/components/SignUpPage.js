import React, { Component } from 'react';
import Navibar from './Navibar.js';
import Footer from './Footer.js';

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password: '',
      emailError: '',
      passwordConfirmation: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('Nice! Here are your credentials ' + this.state.email + " " + this.state.password);
    event.preventDefault();
  }

  getValidationState() {
    const length = this.state.password.length;
    if (length > 8) return 'success';
    else if (length > 4) return 'warning';
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

  renderPasswordError(){
    if(this.getValidationState() === 'success'){
      return (<span>Looks good</span>)
    }else if (this.getValidationState() === 'warning') {
      return (<span>Not that great</span>)
    }else if (this.getValidationState() === 'error') {
      return (<span>Too short</span>)
    }
  }

  validatePassword(){
    if (this.state.passwordConfirmation === '') {
      return ''
    }
    else if(this.state.passwordConfirmation === this.state.password) {
      return (<span>Good</span>)
    }
    else {
      return (<span>Doesn't match your password</span>)
    }
  }

  render() {
    return (
      <div className='signup'>
        <Navibar />
        <div className='page-container'>
          <h1>
            Sign up
          </h1>
          <form onSubmit={this.handleSubmit}>
            <label>First name </label> <br/>
            <input type="text" placeholder="John"/> <br></br>
            <label>Last name</label><br/>
            <input type="text" placeholder="Doe"/>
            <div className={this.state.emailError}>
              <label>Email </label><br/>
              <input type ='text' name='email'
                onBlur={this.validateEmail}
                value={this.state.email}
                placeholder="example@email.com"
                onChange={this.handleInputChange}/>
            </div>

            <div className={this.getValidationState()}>
              <label>Password </label><br/>
              <input name='password'
                type='password'
                value={this.state.password}
                placeholder="The more complex the better"
                onChange={this.handleInputChange}/>
              {this.renderPasswordError()}
            </div>

            <div className=''>
              <label>Confirm Password </label><br/>
              <input name='passwordConfirmation'
                type='password'
                value={this.state.passwordConfirmation}
                placeholder=""
                onChange={this.handleInputChange}/>
              {this.validatePassword()}
            </div>
            <input type="submit" onClick={this.handleSubmit} />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
