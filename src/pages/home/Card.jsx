import React from 'react'
import styles from './Card.module.css'

const Card = ({ image, title, info }) => {
	return (
		<div>
			<div className={styles.card}>
				<div className={styles.card__head}>
					<div className={styles.card__icon}>{image}</div>
					<div className={styles.card__title}>{title}</div>
				</div>
				<div className={styles.desc}>{info}</div>
			</div>
		</div>
	)
}

export default Card
