import React from 'react';
import * as goalAPI from '../../utils/goals-api';
import * as logAPI from '../../utils/logs-api';
import {Link} from 'react-router-dom';
import styles from './ProfilePage.module.css';

class ProfilePage extends React.Component {
    state = {
        remainingExp: 0,
        level: 1, 
        goals: 0,
    };

    /*--- Lifecycle Methods ---*/
    async componentDidMount() {
        let goals = await goalAPI.getCompleted();
        let logs = await logAPI.getAll();
        goals = goals.length;
        logs = logs.length;
        let exp = (15 * goals) + (5 * logs);
        let level = Math.floor((exp / 100)) + 1;
        if (level > 34) {
            level = 34
        };
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
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div>
                            <img src={this.state.avatar} alt="avatar"/>
                        </div>
                        <div className={styles.status}>
                            <p>Level: {this.state.level}</p>
                            <p>Until next level: {this.state.remainingExp}%</p>
                            <p>Goals achieved: {this.state.goals}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.link}>
                    <Link to='/logs'>My Logs</Link><br></br>
                </div>
                <div className={styles.link}>
                    <Link to='/goals/completed'>My Completed Goals</Link>
                </div>
            </div>
        );
    }
}

export default ProfilePage;