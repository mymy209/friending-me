import React from 'react';

function CompletedGoalListItem(props) { 
  return (
    <div>
        <h3>{props.goal.title}</h3>
    </div>
  );
}
export default CompletedGoalListItem;
