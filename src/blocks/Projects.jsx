import React from 'react'
import styles from './Projects.module.css'


import proj_1 from './../images/home/project_1.jpg'
import proj_2 from './../images/home/project_2.jpg'
import proj_3 from './../images/home/project_3.jpg'
import { Link } from 'react-router-dom'

const Projects = () => {
	return (
		<div className={styles.projects}>
			<div className={styles.sub}> <hr style={{ marginTop: '9px' }} /> <div className={styles.text}>Projects we have done</div></div>
			<div className={styles.project__title}>We are creating a place where children with special needs can thrive</div>
			<div className={styles.project__images}>
				<Link to="project"><img src={proj_2} alt="" /></Link>
				<Link to="project"><img src={proj_1} alt="" /></Link>
				<Link to="project"><img src={proj_3} alt="" /></Link>
			</div>
		</div>
	)
}

export default Projects
