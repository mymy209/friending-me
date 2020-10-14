import React from 'react';
import * as goalAPI from '../../utils/goals-api';
import {Link} from 'react-router-dom';

class ProfilePage extends React.Component {
    state = {
        remainingExp: 0,
        level: 1, 
        goals: 0,
    };

    /*--- Lifecycle Methods ---*/
    async componentDidMount() {
        let goals = await goalAPI.getCompleted();
        goals = goals.length
        let exp = 15 * goals;
        let level = Math.floor((exp / 100)) + 1;
        let avatar = level - 1;
        let remainingExp = exp % 100;
        console.log(this.props);
        this.setState({
            remainingExp: remainingExp,
            level: level,
            goals: goals,
            avatar: this.props.AVATAR[avatar]
        });
        this.state.exp = exp;
    }

    render() {
        return(
            <div>
                <h1>Profile</h1>
                <p>Level: {this.state.level}</p>
                <p>Until next level: {this.state.remainingExp}%</p>
                <p>Goals achieved: {this.state.goals}</p>
                <img src={this.state.avatar} alt="avatar"/>
                <Link to='/goals/completed'>My Completed Goals</Link>
            </div>
        );
    }
}

export default ProfilePage;