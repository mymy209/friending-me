import React, {Component} from 'react';

class AddLogPage extends Component {
 state = {
    invalidForm: true, 
    formData: {
        emotion: 0,
        description: '',
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
         <div className="form-group">
           <label>Note</label>
           <input
             name="description"
             value={this.state.formData.name}
             onChange={this.handleChange}
             required
           />
         </div>
         <button />
         <button
           type="submit"
           className="btn"
           disabled={this.state.invalidForm}
         >
           Add Log
         </button>
       </form>
     </>
   );
 }
}
export default AddLogPage;