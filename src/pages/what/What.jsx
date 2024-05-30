import React from 'react'
import styles from './What.module.css'

import Card from './Card';
import Projects from '../../blocks/Projects';
import Volonteers from '../../blocks/Volonteers';
import Events from '../../blocks/Events';


import hero from './../../images/what/hero.jpg';
import icon_1 from './../../images/what/icon_1.png';
import icon_2 from './../../images/what/icon_2.png';
import icon_3 from './../../images/what/icon_3.png';
import icon_4 from './../../images/what/icon_4.png';
import icon_5 from './../../images/what/icon_5.png';
import icon_6 from './../../images/what/icon_6.png';





const What = () => {
	return (
		<div className={styles.what}>
			<div className={styles.what__hero}>
				<div className={styles.hero__text}>
					<div className={styles.hero__sub}><hr style={{ marginTop: "9px" }} /> <div className={styles.text} >What we do</div></div>
					<div className={styles.hero__title}>We are working cross country</div>
					<div className={styles.hero__info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
				</div>
				<div className={styles.hero__image}>
					<img src={hero} alt="/" />
				</div>
			</div>
			<div className={styles.what__needs}>
				<div className={styles.needs__title}>What we do for our kids with special needs</div>
				<div className={styles.needs__cards}>
					<Card
						image={<img src={icon_1} />}
						text="Family support"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
					/>
					<Card
						image={<img src={icon_2} />}
						text="Health benefits"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
					/>
					<Card
						image={<img src={icon_3} />}
						text="Education"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
					/>
					<Card
						image={<img src={icon_4} />}
						text="Basic amenities"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
					/>
					<Card
						image={<img src={icon_5} />}
						text="Therapy"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
					/>
					<Card
						image={<img src={icon_6} />}
						text="Public outreach"
						info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
					/>
				</div>
			</div>
			<div className={styles.what__projects}>
				<Projects />
			</div>
			<div className={styles.what__volonteers}>
				<Volonteers />
			</div>
			<div className={styles.what__events}>
				<Events />
			</div>
		</div>
	)
}

export default What
