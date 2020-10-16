import React from 'react';
import CompletedGoalListItem from '../../components/CompletedGoalListItem/CompletedGoalListItem';
import * as goalAPI from '../../utils/goals-api';
import {Link} from 'react-router-dom';
import styles from './CompletedGoalsListPage.module.css';

class CompletedGoalsListPage extends React.Component{
    state = {
        goals: []
    }

    async componentDidMount() {
        const goals = await goalAPI.getCompleted();
        this.setState({goals});
    }

    render() {
        return (
            <div>
                <h1>Completed Goals List</h1>
                <div className={styles.link}>
                    <Link to='/goals' >Back to Goals List</Link>
                </div>
                {this.state.goals.map(goal =>(
                    <CompletedGoalListItem goal={goal} key={goal._id} />
                ))}
            </div>
        );
    }
}

export default CompletedGoalsListPage;