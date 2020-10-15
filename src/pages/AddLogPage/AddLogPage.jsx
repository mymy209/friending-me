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

 checkIfValid() {
   if (this.state.formData.emotion) return true;
 }

 formRef = React.createRef();

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
       {Object.keys(this.props.EMOTIONS).map(emotion => (
         <div key={emotion}>
           <p>{emotion}</p>
           <button>
            <img src={this.props.EMOTIONS[emotion].pic} alt={emotion} onClick={this.handleClick}/>
           </button>
          </div>
       ))}
       <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <div>
           <label>Note</label>
           <input
             name="description"
             value={this.state.formData.name}
             onChange={this.handleChange}
           />
         </div>
         <button
           type="submit"
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