import React from 'react'
import styles from './Card.module.css'

const Card = ({ image, title, date, info }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__image}>{image}</div>
			<div className={styles.card__text}>
				<div className={styles.card__title}>{title}</div>
				<div className={styles.card__date}>{date}</div>
				<div className={styles.card__info}>{info}</div>
			</div>
		</div>
	)
}

export default Card
