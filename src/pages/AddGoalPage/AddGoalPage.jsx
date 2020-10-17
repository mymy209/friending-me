import React, {Component} from 'react';
import styles from './AddGoalPage.module.css';

class AddGoalPage extends Component {
	state = {
		invalidForm: true, 
		formData: {
			title: '',
			completed: false,
			user: this.props.user._id
		}
	};

	formRef = React.createRef();

	handleSubmit = e => {
	e.preventDefault();
	this.props.handleAddGoal(this.state.formData);
	};

	handleChange = e => {
	console.log(this.state.formData.user);
	const formData = {...this.state.formData, [e.target.name]: e.target.value};
	this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
	});
	};
	render() {
	return (
		<>
		<h1>Add Goal</h1>
		<form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
			<h3>Title (required)</h3><br/>
			<div className={styles.padding}>
			<input
				className={styles.input}
				name="title"
				value={this.state.formData.name}
				onChange={this.handleChange}
				required
			/>
			</div>
			<button
			type="submit"
			className={styles.button}
			disabled={this.state.invalidForm}
			
			>
			Add Goal
			</button>
		</form>
		</>
	);
	}
}
export default AddGoalPage;