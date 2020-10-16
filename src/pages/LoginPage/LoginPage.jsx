import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import styles from './LoginPage.module.css';

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
		<div>
			<h1>Log In</h1>
			<form onSubmit={this.handleSubmit} >
				<div className={styles.inputContainer}>
					<input className={styles.input} type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} /> 
				</div>
				<div className={styles.inputContainer}>
					<input className={styles.input} type="password" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} /> 
				</div>
				<button className={styles.button} >Log In</button>&nbsp;&nbsp;&nbsp;
				<Link to='/'>Cancel</Link>
			</form>
		</div>
		);
	}
}

export default LoginPage;