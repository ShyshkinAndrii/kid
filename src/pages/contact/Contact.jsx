import React from 'react'
import styles from './Contact.module.css'

import fb from './../../images/about/fb.svg'
import tw from './../../images/about/tw.png'
import ln from './../../images/about/in.png'
import map from './../../images/contacts/map.jpg'

const Contact = () => {
	return (
		<div className={styles.contacts}>
			<div className={styles.contacts__hero}>
				<div className={styles.hero__text}>
					<div className={styles.hero__sub}><hr style={{ marginTop: "9px" }} /> <div className={styles.text} >Contact us</div></div>
					<div className={styles.hero__title}>We'd love to hear from you</div>
					<div className={styles.hero__info}>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</div>
				</div>
				<div className={styles.info}>
					<div className={styles.info__card}>
						<div className={styles.card__title}>Let's talk! </div>
						<div className={styles.card__info1}>
							<div className={styles.card__phone}>+234 09012346514</div>
							<div className={styles.card__mail}>hello@largerthani.com</div>
						</div>
					</div>
					<div className={styles.info__card}>
						<div className={styles.card__title}>Headoffice</div>
						<div className={styles.card__info}><p>8 Brewery Drive, Lagos,</p>
							<p>Nigeria</p>.</div>
					</div>
					<div className={styles.info__card}>
						<div className={styles.card__title}>Branch Office</div>
						<div className={styles.card__info}><p>Opp Opolo round about, Yenagoa, Bayelsa,</p>
							<p>Nigeria</p></div>
					</div>
					<div className={styles.card__image}>
						<img src={fb} alt="" />
						<img src={tw} alt="" />
						<img src={ln} alt="" />
					</div>
				</div>
			</div>
			<div className={styles.contacts__user}>
				<div className={styles.user__form}>
					<div className={styles.user}>
						<label htmlFor="">First Name</label>
						<input type="text" />
					</div>
					<div className={styles.user}>
						<label htmlFor="">Last Name</label>
						<input type="text" />
					</div>
					<div className={styles.user}>
						<label htmlFor="">Email Id</label>
						<input type="text" />
					</div>
					<div className={styles.user}>
						<label htmlFor="">Subject</label>
						<input type="text" />
					</div>
				</div>
				<div className={styles.user__text}>
					<label htmlFor="">Message</label>
					<textarea name="" id="" cols="30" rows="10" placeholder='Type your Messege'></textarea>
				</div>
				<div className={styles.user__btn}><button>Send message</button></div>
			</div>
			<div className={styles.map}>
				<img src={map} alt="" />
			</div>
		</div>
	)
}

export default Contact
