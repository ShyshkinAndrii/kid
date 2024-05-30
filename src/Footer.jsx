import React from 'react'

import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer>
			<div className={styles.footer__container}>
				<div className={styles.footer__menu}>
					<div className={styles.footer__logo}><Link to='/'>largerthan<span>i</span></Link></div>
					<div className={styles.footer__columns}>
						<ul className={styles.column}>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='about'>About us</Link></li>
							<li><Link to='about'>Team</Link></li>
							<li><Link to='what'>What we do</Link></li>
							<li><Link to='contact'>Contact</Link></li>
						</ul>
						<ul className={styles.column}>
							<li><Link to="">More</Link></li>
							<li><Link to="project">Projects</Link></li>
							<li><Link to="">Events</Link></li>
							<li><Link to="donate">Donate</Link></li>
							<li><Link to="">Blog</Link></li>
						</ul>
						<ul className={styles.column}>
							<li><Link to="">Connect</Link> </li>
							<li><Link to="">Facebook</Link></li>
							<li><Link to="">Instagram</Link></li>
							<li><Link to="">Twitter</Link></li>
							<li><Link to="">Linkdin</Link></li>
						</ul>
					</div>
				</div>
				<div className={styles.footer__form}>
					<div className={styles.footer__title}>Subscribe to get latest updates</div>
					<div className={styles.form}>
						<input placeholder='Your email' ></input>
						<button>Subscribe</button>
					</div>

				</div>
			</div>
		</footer>
	)
}

export default Footer
