import React from 'react';

import styles from './About.module.css';
import Card from './Card';

import Volonteers from '../../blocks/Volonteers';
import Events from '../../blocks/Events';


import hero from './../../images/about/hero.jpg'
import logo_1 from './../../images/home/logo_1.png';
import logo_2 from './../../images/home/logo_2.png';
import logo_3 from './../../images/home/logo_3.png';
import logo_4 from './../../images/home/logo_4.png';
import logo_5 from './../../images/home/logo_5.png';
import logo_6 from './../../images/home/logo_6.png';
import aw_1 from './../../images/about/award_1.png';
import aw_2 from './../../images/about/award_2.png';
import aw_3 from './../../images/about/award_3.png';
import aw_4 from './../../images/about/award_4.png';
import team from './../../images/about/team.jpg';
import face_1 from './../../images/about/face_1.jpg';
import face_2 from './../../images/about/face_2.jpg';
import face_3 from './../../images/about/face_3.jpg';
import face_4 from './../../images/about/face_4.jpg';
import face_5 from './../../images/about/face_5.jpg';
import face_6 from './../../images/about/face_6.jpg';
import face_7 from './../../images/about/face_7.jpg';
import face_8 from './../../images/about/face_8.jpg';





const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.hero}>
				<div className={styles.hero__sub}><hr style={{ marginTop: "9px" }} /> <div className={styles.text} >Know About us</div></div>
				<div className={styles.hero__text}>
					<div className={styles.hero__title}>We are a non-governmental organization</div>
					<div className={styles.hero__info}>
						<div className={styles.info__title}>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
						<div className={styles.info__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</div>
					</div>
				</div>
				<div className={styles.hero__image}>
					<img src={hero} alt="/" />
				</div>
			</div>
			<div className={styles.mission} >
				<div className={styles.mission__text}>
					<div className={styles.mission__column}>
						<div className={styles.mission__sub}>our mission</div>
						<div className={styles.mission__title}>We make sure to provide inclusive care for children with special needs</div>
						<div className={styles.mission__info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
					</div>
					<div className={styles.mission__column}>
						<div className={styles.mission__sub}>our Vision</div>
						<div className={styles.mission__title}>Provide more inclusive care to children around the world</div>
						<div className={styles.mission__info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
					</div>
				</div>
				<div className={styles.mission__support}>
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

			</div>
			<div className={styles.awards}>
				<div className={styles.awards__title}>Awards & Recognitions</div>
				<div className={styles.awards__image}>
					<img src={aw_1} alt="/" />
					<img src={aw_2} alt="/" />
					<img src={aw_3} alt="/" />
					<img src={aw_4} alt="/" />
				</div>
			</div>
			<div className={styles.journey}>
				<div className={styles.journey__container}>
					<div className={styles.journey__text}>
						<div className={styles.journey__sub}>OUR JOURNEY </div>
						<div className={styles.journey__title}>How we raised 34M</div>
						<div className={styles.journey__info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.</div>
						<div className={styles.journey__numbers}>
							<div className={styles.number}>
								<div className={styles.number__title}>34M+</div>
								<div className={styles.number__sub}>Donation Received</div>
							</div>
							<div className={styles.number}>
								<div className={styles.number__title}>400+</div>
								<div className={styles.number__sub}>Volunters</div>
							</div>
							<div className={styles.number}>
								<div className={styles.number__title}>20+</div>
								<div className={styles.number__sub}>Care homes</div>
							</div>
						</div>
					</div>
					<div className={styles.journey__image}>
						<img src={team} alt="/" />
					</div>
				</div>
			</div>
			<div className={styles.team}>
				<div className={styles.team__container}>
					<div className={styles.team__title}>Meet our team</div>
					<div className={styles.team__sub}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
					<div className={styles.team__cards}>
						<Card
							image={<img src={face_1} />}
							name="Leonard John Davies"
							position="Cofounder, CEO"
						/>
						<Card
							image={<img src={face_2} />}
							name="Francis Weber"
							position="Vice Chairman"
						/>
						<Card
							image={<img src={face_3} />}
							name="Kyla Obrien"
							position="Head of Authority"
						/>
						<Card
							image={<img src={face_4} />}
							name="Adrian Dixon"
							position="Support Executive"
						/>
						<Card
							image={<img src={face_5} />}
							name="Freddy Busby"
							position="Project Manager"
						/>
						<Card
							image={<img src={face_6} />}
							name="Dale Banks"
							position="Accountatnt, Finance"
						/>
						<Card
							image={<img src={face_7} />}
							name="Miriam Middleton"
							position="Cofounder, CEO"
						/>
						<Card
							image={<img src={face_8} />}
							name="Ellen Walton"
							position="Vice Chairman"
						/>
					</div>
				</div>
			</div>
			<div className={styles.volonteer}>
				<Volonteers />
			</div>
			<div className={styles.events}>
				<Events />
			</div>
		</div>
	)
}

export default About
