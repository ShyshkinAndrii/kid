import React from 'react'
import styles from './Volonteers.module.css';
import { Link } from 'react-router-dom';

const Volonteers = () => {
	return (

		<div className={styles.events__image}>
			<div className={styles.image__title}>You can contribute to provide a place for children with special needs!</div>
			<div className={styles.image__buttons}>
				<div className={styles.btn__yellow}><button>Join as a volunteer</button></div>
				<div className={styles.btn}><Link to="donate"><button>Donate</button></Link></div>
			</div>
		</div>

	)
}

export default Volonteers
