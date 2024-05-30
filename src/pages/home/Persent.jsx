import React from 'react'
import styles from './Persent.module.css';


const Persent = ({ image, text }) => {
	return (
		<div className={styles.pers}>
			<div className={styles.pers__image}>{image}</div>
			<div className={styles.pers__text}>{text}</div>
		</div>
	)
}

export default Persent
