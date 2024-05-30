import React, { useState } from 'react'
import styles from './Navbar.module.css'

import { Link } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState('false');
	const [menuOpen, setMenuOpen] = useState('false');


	return (
		<header className={styles.navbar}>
			<nav>
				<div className={styles.logo}><Link to="/">largerthan<span>i</span></Link></div>
				<div className={styles.menu} >
					<ul className={menuOpen ? [styles.open] : ""}>
						<li><Link to="/">Home</Link></li>
						<li><Link to="about">About us</Link></li>
						<li><Link to="what">What We Do</Link></li>
						<li><Link to="media">Media</Link></li>
						<li><Link to="contact">Contact</Link></li>
						<li></li>
					</ul>
				</div>
				<div className={styles.nav__btn}> <Link to="donate"><button className={menuOpen ? [styles.open] : ""} >Donate</button></Link> </div>
			</nav >

			<div className={styles.mobile__btn}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<div
					onClick={() => setNav(!nav)}
				>
					{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</div>

			</div>
		</header >
	)
}

export default Navbar
