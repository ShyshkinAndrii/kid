import React from 'react'
import styles from './Project.module.css';

import Card from './Card';

import main_image from '../../images/more/hero.jpg'
import icon_1 from './../../images/more/icon_1.png'
import icon_2 from './../../images/more/icon_2.png'
import icon_3 from './../../images/more/icon_3.png'
import icon_4 from './../../images/more/icon_4.png'
import Projects from '../../blocks/Projects';
import Events from '../../blocks/Events';


const Project = () => {
	return (
		<div className={styles.project}>
			<div className={styles.project__hero}>
				<div className={styles.hero__sub}><hr style={{ marginTop: "9px" }} /> <div className={styles.text} >Our project</div></div>
				<div className={styles.hero__title}>Mission Smile 1k: Outdoor charity outreach</div>
				<div className={styles.hero__info}>
					<p>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
					<p>
						Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
						Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>
					<p>Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.</p>
				</div>
				<div className={styles.info__image}>
					<img src={main_image} alt="" />
				</div>
				<div className={styles.hero__title}>Some cool heading</div>
				<div className={styles.hero__info}>
					<p>Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum felis interdum pharetra. Diam fermentum in lectus morbi at eget sit et quisque. Semper commodo viverra donec magna egestas nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim penatibus faucibus tempus. Arcu pharetra morbi bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus suscipit sagittis, ultrices ut dui.</p>
					<p>
						<ul>
							<li>Posuere sed pulvinar enim faucibus justo, cursus. </li>
							<li>In diam facilisi at sit convallis blandit blandit in.</li>
							<li>Maecenas odio orci lectus urna ante consequat erat non morbi.</li>
						</ul>
					</p>
					<p>Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi.</p>
				</div>
			</div>
			<div className={styles.project__cards}>
				<Card
					icon={<img src={icon_1} alt='/' />}
					text="20+ orphanage visit in 2 months"
					info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
				/>
				<Card
					icon={<img src={icon_2} alt='/' />}
					text="230 People Have donated"
					info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
				/>
				<Card
					icon={<img src={icon_3} alt='/' />}
					text="30+ people joined "
					info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
				/>
				<Card
					icon={<img src={icon_4} alt='/' />}
					text="1.2m Raised for this initiate"
					info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
				/>
			</div>
			<Projects />
			<Events />
		</div>
	)
}

export default Project
