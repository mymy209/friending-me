import React from 'react';
import GoalListItem from '../../components/GoalListItem/GoalListItem';

function GoalsListPage(props) {
    return (
        <div>
            <h1>Goals List</h1>
            {props.goals.map(goal =>(
                <GoalListItem goal={goal} key={goal._id} handleDeleteGoal={props.handleDeleteGoal}/>
            ))}
        </div>
        
    );
}

export default GoalsListPage;