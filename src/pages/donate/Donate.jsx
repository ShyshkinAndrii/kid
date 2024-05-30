import React from 'react'

import styles from './Donate.module.css'

import donate from './../../images/donate/donate.jpg'
import Volonteers from '../../blocks/Volonteers'

const Donate = () => {
	return (
		<div className={styles.donate}>
			<div className={styles.donate__hero}>
				<div className={styles.hero__text}>
					<div className={styles.hero__sub}><hr style={{ marginTop: "9px" }} /> <div className={styles.text} >Donate</div></div>
					<div className={styles.hero__title}>Making a donation for our children.</div>
					<div className={styles.hero__info}>When you donate, you’re supporting effective care to children with special needs—an investment in the leaders of tomorrow.</div>
					<div className={styles.hero__btn}><button>Donate now</button></div>
				</div>
				<div className={styles.hero__image}>
					<img src={donate} alt="/" />
				</div>
			</div>
			<div className={styles.donate__caring}>
				<div className={styles.caring__left}>
					<div className={styles.left__title}>How you can contribute to caring for our kids</div>
					<div className={styles.left__info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
				</div>
				<div className={styles.caring__right}>
					<div className={styles.right__list}>
						<ul>
							<li> Overview</li>
							<li>Impact</li>
							<li>What You get</li>
						</ul>
					</div>
					<div className={styles.right__info}>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </p>
						<p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
					</div>
				</div>
			</div>
			<div className={styles.donate__use}>
				<div className={styles.use__title}>How we use your donation</div>
				<div className={styles.use__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.</div>
				<div className={styles.use__text}>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</div>
			</div>
			<div className={styles.donate__volonteers}>
				<Volonteers />
			</div>
		</div>
	)
}

export default Donate
