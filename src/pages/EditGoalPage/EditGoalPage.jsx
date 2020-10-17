import React from 'react';
import {Link} from 'react-router-dom';
import styles from './EditGoalPage.module.css';

class EditGoalPage extends React.Component {
 state = {
   invalidForm: false,
   formData: this.props.location.state.goal
 };

 formRef = React.createRef();

 handleSubmit = e => {
   e.preventDefault();
   this.props.handleUpdateGoal(this.state.formData);
 };

 handleChange = e => {
   const formData = {...this.state.formData, [e.target.name]: e.target.value};
   this.setState({
     formData,
     invalidForm: !this.formRef.current.checkValidity()
   });
 };

 handleCheck = e => {
   const formData = {
     ...this.state.formData, completed: !this.state.formData.completed
   }
   this.setState({
     formData, 
     invalidForm: !this.formRef.current.checkValidity()
   });
 }

 render() {
   return (
     <>
       <h1>Edit Goal</h1>
       <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <div>
           <h3>Goal's Title (required)</h3>
           <div className={styles.padding}>
            <input
              className={styles.input}
              name="title"
              value={this.state.formData.title}
              onChange={this.handleChange}
              required
            />
           </div>
           <div className={styles.padding}>
            <label className={styles.label}>Accomplished </label>
            <input
              type="checkbox"
              name="completed"
              value={this.state.formData.completed}
              onChange={this.handleCheck}
            />
           </div>
         </div>
         <button
           className={styles.button}
           type="submit"
           disabled={this.state.invalidForm}
         >
           Save Goal
         </button>&nbsp;&nbsp;
         <Link to='/goals'>CANCEL</Link>
       </form>
     </>
   );
 }
}
export default EditGoalPage;