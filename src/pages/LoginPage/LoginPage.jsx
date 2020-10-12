//ALL COMPLETED?
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <h1>Log In</h1>
        <form className="" onSubmit={this.handleSubmit} >
          <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} /> <br></br>
          <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} /> <br></br>
          <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
          <Link to='/'>Cancel</Link>
        </form>
      </div>
    );
  }
}

export default LoginPage;