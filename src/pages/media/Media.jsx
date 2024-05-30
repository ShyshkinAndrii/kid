import React from 'react'
import styles from './Media.module.css'

import Card from './Card'
import Volonteers from '../../blocks/Volonteers'
import Events from '../../blocks/Events'

import letters from './../../images/media/letters.jpg'
import kid_1 from './../../images/media/kid_1.jpg'
import kid_2 from './../../images/media/kid_2.jpg'



const Media = () => {
	return (
		<div className={styles.media}>
			<div className={styles.media__hero}>
				<div className={styles.hero__text}>
					<div className={styles.hero__sub}><hr style={{ marginTop: "9px" }} /> <div className={styles.text} >Top news</div></div>
					<div className={styles.hero__title}>Our goal is to provide inclusive care for children with special needs</div>
					<div className={styles.hero__info}>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
					<div className={styles.hero__btn}><button>Read more</button></div>
				</div>
				<div className={styles.hero__tables}>
					<Card
						image={<img src={letters} alt='/' />}
						title="Autism care day"
						date="15th Nov 2022"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
					/>
					<Card
						image={<img src={kid_1} alt='/' />}
						title="Down syndrome outreach"
						date="15th Nov 2022"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
					/>
					<Card
						image={<img src={kid_2} alt='/' />}
						title="Caring for children with cerebral palsy"
						date="15th Nov 2022"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
					/>
				</div>
			</div>
			<div className={styles.media__volonteers}>
				<Volonteers />
			</div>
			<div className={styles.media__events}>
				<Events />
			</div>
		</div>
	)
}

export default Media
