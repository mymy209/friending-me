import React from 'react';
import {Link} from 'react-router-dom';

function GoalListItem(props) { 
  return (
    <div>
        <p>{props.goal.title}</p>
      <Link
        to={{
          pathname: '/goals/edit',
          state: {goal: props.goal}
        }}
      >
        Edit
      </Link>
      <button
        onClick={() => props.handleDeleteGoal(props.goal._id)}
      >
        DELETE
      </button>
    </div>
  );
}
export default GoalListItem;
