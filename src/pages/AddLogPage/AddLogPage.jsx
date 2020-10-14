import React, {Component} from 'react';
import EmotionItem from '../../components/EmotionItem/EmotionItem';

class AddLogPage extends Component {
 state = {
    invalidForm: true, 
    formData: {
        emotion: '',
        description: '',
        user: this.props.user._id,
    }
 };

 formRef = React.createRef();

async componentDidMount() {
  console.log(this.props.EMOTIONS);
}

 handleSubmit = e => {
   e.preventDefault();
   this.props.handleAddGoal(this.state.formData);
 };

 handleChange = e => {
   const formData = {...this.state.formData, [e.target.name]: e.target.value};
   this.setState({
     formData,
     invalidForm: !this.formRef.current.checkValidity()
   });
 };

 handleClick = e => {

 }

 render() {
   return (
     <>
       <h1>Add Log</h1>
       {Object.keys(this.props.EMOTIONS).map(emotion => (
         <div>
           <p>{emotion}</p>
           <EmotionItem EMOTIONS={this.props.EMOTIONS} key={emotion} emotion={emotion}/>
           </div>
       ))}
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