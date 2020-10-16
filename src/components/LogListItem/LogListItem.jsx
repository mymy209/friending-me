import React from 'react';
import styles from './LogListItem.module.css';

function LogListItem(props) { 
	return (
		<div className={styles.container} >
			<div className={styles.card}>
				<div>
					<img src={props.EMOTIONS[props.log.emotion].pic} alt="emotion"/>
					<p>{props.log.date}</p>
				</div>
				<div className={styles.note}>
					<p className={styles.text}>{props.log.description}</p>
				</div>
			</div>
		</div>
	);
}
export default LogListItem;