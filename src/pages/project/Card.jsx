import React from 'react'
import styles from './Card.module.css'

const Card = ({ icon, text, info }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__title}>
				<div className={styles.title__icon}>{icon}</div>
				<div className={styles.title__text}>{text}</div>
			</div>
			<div className={styles.card__info}>{info}</div>
		</div>
	)
}

export default Card
