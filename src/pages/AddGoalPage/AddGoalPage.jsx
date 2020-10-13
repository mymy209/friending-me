import React, {Component} from 'react';
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
       <h1>Add Puppy</h1>
       <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <div className="form-group">
           <label>Title (required)</label>
           <input
             name="title"
             value={this.state.formData.name}
             onChange={this.handleChange}
             required
           />
         </div>
         <button
           type="submit"
           className="btn"
           disabled={this.state.invalidForm}
         >
           ADD GOAL
         </button>
       </form>
     </>
   );
 }
}
export default AddGoalPage;