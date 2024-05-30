import React from 'react'
import styles from './Events.module.css'

import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Events = () => {
	return (
		<div className={styles.events}>
			<div className={styles.events__title}><div className={styles.event__text}>Our Events</div><hr style={{ marginTop: '30px' }} /></div>
			<div className={styles.events__cards}>

				<div className={styles.event}>
					<div className={styles.event__date}><p style={{ fontSize: '40px' }} >13</p> <p style={{ fontSize: '16px' }} >APR</p></div>
					<div className={styles.event__desc}>
						<div className={styles.desc__title}>
							<div className={styles.desc__text}>Next Events</div>
							<hr />
						</div>
						<div className={styles.desc__info}>A day with our wonderful children </div>
					</div>
					<div className={styles.event__icon}><IoArrowForwardCircleOutline size={56} /></div>
				</div>

				<div className={styles.event}>
					<div className={styles.event__date}><p style={{ fontSize: '40px' }} >25</p> <p style={{ fontSize: '16px' }} >APR</p></div>
					<div className={styles.event__desc}>
						<div className={styles.desc__title}>
							<div className={styles.desc__text}>Next Events</div>
							<hr />
						</div>
						<div className={styles.desc__info}>Seminar: Caring for children with autism </div>
					</div>
					<div className={styles.event__icon}><IoArrowForwardCircleOutline size={56} /></div>
				</div>

			</div>
		</div>
	)
}

export default Events
