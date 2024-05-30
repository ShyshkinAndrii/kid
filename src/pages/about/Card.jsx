import React from 'react'
import styles from './Card.module.css';

import fb from './../../images/about/fb.svg'
import tw from './../../images/about/tw.png'
import ln from './../../images/about/in.png'

const Card = ({ image, name, position }) => {
	return (
		<div>
			<div className={styles.card}>
				<div className={styles.card__image}> {image} </div>
				<div className={styles.card__name}> {name} </div>
				<div className={styles.card__position}> {position} </div>
				<div className={styles.card__social}>
					<img src={fb} alt="/" />
					<img src={tw} alt="/" />
					<img src={ln} alt="/" />
				</div>
			</div>
		</div>
	)
}

export default Card
