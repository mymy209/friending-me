import React from 'react';

function GoalsListPage(props) {
    return (
        <div>
            <h1>Goals List</h1>
            {props.goals.map(goal =>(
                <p key={goal}>{goal.title}</p>
            ))}
        </div>
        
    );
}

export default GoalsListPage;