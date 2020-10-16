import React from 'react';
import styles from './CompletedGoalListItem.module.css';

function CompletedGoalListItem(props) { 
  return (
		<div className={styles.container}>
			<div className={styles.card} >
				<p className={styles.text}>{props.goal.title}</p>
			</div>
		</div>
  );
}
export default CompletedGoalListItem;
