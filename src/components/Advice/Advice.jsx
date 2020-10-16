import React from 'react';
import * as adviceAPI from '../../utils/advice-api';
import './Advice.css';

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
            <div class="adviceContainer fade-in">
                <div className="adviceCard">
                    <p className="fade-in">{this.state.advice}</p>
                </div>
            </div>
        );
    }
}

export default Advice;