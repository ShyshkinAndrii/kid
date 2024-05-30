import React from 'react';

import styles from './Home.module.css';



import place from './../../images/home/place.jpg';
import logo_1 from './../../images/home/logo_1.png';
import logo_2 from './../../images/home/logo_2.png';
import logo_3 from './../../images/home/logo_3.png';
import logo_4 from './../../images/home/logo_4.png';
import logo_5 from './../../images/home/logo_5.png';
import logo_6 from './../../images/home/logo_6.png';
import kid from './../../images/home/boy.jpg';
import icon_1 from './../../images/home/icon_1.png';
import icon_2 from './../../images/home/icon_2.png'
import icon_3 from './../../images/home/icon_3.png'
import icon_4 from './../../images/home/icon_4.png'
import proj_1 from './../../images/home/project_1.jpg'
import proj_2 from './../../images/home/project_2.jpg'
import proj_3 from './../../images/home/project_3.jpg'
import per_1 from './../../images/home/per_1.png'
import per_2 from './../../images/home/per_2.png'
import per_3 from './../../images/home/per_3.png'
import per_4 from './../../images/home/per_4.png'
import per_5 from './../../images/home/per_5.png'
import circle from './../../images/home/Chart1.png'


import Card from './Card';
import Persent from './Persent';
import Volonteers from '../../blocks/Volonteers';
import Events from '../../blocks/Events';
import Projects from '../../blocks/Projects';
import { Link } from 'react-router-dom';



const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.hero}>
				<div className={styles.title}>Inclusive care for children with special needs</div>
				<div className={styles.hero__btn}>
					<Link to="what"><button>What we do</button></Link>
				</div>
			</div>
			<div className={styles.place}>
				<div className={styles.place__text}>
					<div className={styles.sub}> <hr style={{ marginTop: "9px" }} /> <div className={styles.text} >Know About us</div></div>
					<div className={styles.place__title}>We provide a place for children with special needs</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
					<p>‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
					<div className={styles.place__btn}><Link to="about"><button>Learn more</button></Link></div>
				</div>
				<div className={styles.place__image}>
					<img src={place} alt="/" />
				</div>
			</div>
			<div className={styles.support}>
				<div className={styles.support__title}>
					< div className={styles.support__text}>our Supporters  </div>
				</div>
				<div className={styles.support__image}>
					<img src={logo_1} alt="/" />
					<img src={logo_2} alt="/" />
					<img src={logo_3} alt="/" />
					<img src={logo_4} alt="/" />
					<img src={logo_5} alt="/" />
					<img src={logo_6} alt="/" />
				</div>
			</div>
			<div className={styles.boy}>
				<div className={styles.boy__text}>
					<div className={styles.sub}> <hr style={{ marginTop: '9px' }} /> <div className={styles.text}>What we do</div></div>
					<div className={styles.boy__title}>Some services we provide for our children</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
					<div className={styles.cards}>
						<Card
							image={<img src={icon_4} />}
							title="Family support"
							info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
						/>
						<Card
							image={<img src={icon_1} />}
							title="Health benefits"
							info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
						/>
						<Card
							image={<img src={icon_2} />}
							title="Scholarships"
							info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
						/>
						<Card
							image={<img src={icon_3} />}
							title="Therapy"
							info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
						/>
					</div>
				</div>

				<div className={styles.boy__image}>
					<img src={kid} alt="/" />
				</div>
			</div>
			<div className={styles.projects}>
				<Projects />
			</div>
			<div className={styles.donation}>
				<div className={styles.donation__text}>
					<div className={styles.donation__title}>How we spend your donations and where it goes</div>
					<div className={styles.sub}>We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.</div>
					<div className={styles.persent}>
						<Persent
							image={<img src={per_1} />}
							text="40% child care home"
						/>
						<Persent
							image={<img src={per_2} />}
							text="35% cleanliness program"
						/>
						<Persent
							image={<img src={per_3} />}
							text="10% helping people"
						/>
						<Persent
							image={<img src={per_4} />}
							text="10% excursions"
						/>
						<Persent
							image={<img src={per_5} />}
							text="5% feeding the poor"
						/>
					</div>
				</div>
				<div className={styles.donation__image}>
					<img src={circle} alt="/" />
				</div>
			</div>
			<div className={styles.volonteers}>
				<Volonteers />
			</div>
			<div className={styles.events}>
				<Events />
			</div>
		</div >
	)
}

export default Home
