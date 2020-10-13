import React from 'react';
import {Link} from 'react-router-dom';

function CompletedGoalListItem(props) { 
  return (
    <div>
        <h3>{props.goal.title}</h3>
        <Link to='/goals'>Back to Goals List</Link>
    </div>
  );
}
export default CompletedGoalListItem;
