import React, {Component} from 'react';
import styles from './AddLogPage.module.css';

class AddLogPage extends Component {
	state = {
		invalidForm: true, 
		formData: {
			emotion: '',
			description: '',
			date: '',
			user: this.props.user._id,
		}
	};

	checkIfValid() {
	if (this.state.formData.emotion) return true;
	}

	formRef = React.createRef();

	async componentDidUpdate() {
	let today = new Date();
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0');
	const yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	this.state.formData.date = today;
	}

	handleSubmit = e => {
	e.preventDefault();
	this.props.handleAddLog(this.state.formData);
	};

	handleChange = e => {
	const formData = {...this.state.formData, [e.target.name]: e.target.value};
	this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
	});
	};

	handleClick = e => {
	const formData = {...this.state.formData, emotion: e.target.alt};
	this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
	});
	}

	render() {
	return (
		<>
		<h1>Add Log</h1>
		<div className={styles.container}>
			<div className={styles.emotionForm} >
				<div className={styles.padding}>
					<h2>Emotion</h2>
				</div>
				<div className={styles.emotions}>
					{Object.keys(this.props.EMOTIONS).map(emotion => (
						<div className={styles.emotion} key={emotion}>
							<button className={this.state.formData.emotion === emotion ? styles.selected : styles.button}>
								<img src={this.props.EMOTIONS[emotion].pic} alt={emotion} onClick={this.handleClick}/>
							</button>
							<div className={styles.label}>
								<p>{emotion}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={styles.note}>
				<form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
					<div className={styles.padding}>
						<div className={styles.padding}>
							<h2>Note</h2>
						</div>
						<div className={styles.center}>
							<textarea
								className={styles.input}
								name="description"
								value={this.state.formData.name}
								onChange={this.handleChange}
								required
							/><br/>
							<div className={styles.btnContainer}>
								<button
								className={styles.submitBtn}
								type="submit"
								disabled={this.state.invalidForm}
								>
								Add Log
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		</>
	);
	}
}
export default AddLogPage;