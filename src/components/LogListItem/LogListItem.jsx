import React from 'react';


function LogListItem(props) { 
  return (
    <div>
      <img src={props.EMOTIONS[props.log.emotion].pic} alt="emotion"/>
      <p>{props.log.description}</p>
      <p>{props.log.date}</p>
      {/* <Link
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
      </button> */}
    </div>
  );
}
export default LogListItem;