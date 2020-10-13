import React from 'react';
import {Link} from 'react-router-dom';

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

 render() {
   return (
     <>
       <h1>Edit Goal</h1>
       <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <div className="form-group">
           <label>Goal's Title (required)</label>
           <input
             name="title"
             value={this.state.formData.title}
             onChange={this.handleChange}
             required
           />
         </div>
         <button
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