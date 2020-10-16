import React from 'react';
import * as adviceAPI from '../../utils/advice-api';

class Advice extends React.Component {
    state = {
        advice: ''
    }
    
    async componentDidMount() {
        const advice = await adviceAPI.index();
        this.setState({advice});
    }

    render() {
        console.log(this.state.advice);
        return (
        <p>{this.state.advice}</p>
        );
    }
}

export default Advice;