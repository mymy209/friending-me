import React from 'react';
import GoalListItem from '../../components/GoalListItem/GoalListItem';
import {Link} from 'react-router-dom';
import styles from '../CompletedGoalsListPage/CompletedGoalsListPage.module.css';

function GoalsListPage(props) {
    const goals = props.goals.filter(goal => !goal.completed );
    return (
        <div>
            <h1>Goals List</h1>
            <div className={styles.link}>
                <Link to='/goals/completed'>My Completed Goals</Link>
            </div>
            {goals.map(goal => (
                <GoalListItem goal={goal} key={goal._id} handleDeleteGoal={props.handleDeleteGoal}/>
            ))}
        </div>
    );
}

export default GoalsListPage;