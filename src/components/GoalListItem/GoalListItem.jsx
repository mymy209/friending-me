import React from 'react';
import {Link} from 'react-router-dom';
import styles from './GoalListItem.module.css';

function GoalListItem(props) { 
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.goal}>
					<p className={styles.text}>{props.goal.title}</p>
				</div>
				<div className={styles.vertical}>
					<Link
						className={styles.edit}
						to={{
						pathname: '/goals/edit',
						state: {goal: props.goal}
						}}
					>
						Edit
					</Link>
				</div>
				<div className={styles.vertical}>
					<button
						className={styles.button}
						onClick={() => props.handleDeleteGoal(props.goal._id)}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
export default GoalListItem;
