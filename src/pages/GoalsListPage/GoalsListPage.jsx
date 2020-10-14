import React from 'react';
import GoalListItem from '../../components/GoalListItem/GoalListItem';
import {Link} from 'react-router-dom';


function GoalsListPage(props) {
    const goals = props.goals.filter(goal => !goal.completed );
    return (
        <div>
            <h1>Goals List</h1>
            {goals.map(goal => (
                <GoalListItem goal={goal} key={goal._id} handleDeleteGoal={props.handleDeleteGoal}/>
            ))}
            <Link to='/goals/completed'>My Completed Goals</Link>
        </div>
    );
}

export default GoalsListPage;