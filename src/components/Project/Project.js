import './Project.css'
import { motion } from 'framer-motion'
function Projects(props) {
	return (
		<motion.div
			id={props.id}
			className="projects"
			initial={{ opacity: 0, translateX: -20, translateY: -30 }}
			whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
			transition={{ duration: 1.3}}
		>
			<img className="project-image" src={props.image} alt="" />
			{props.hideText ? '' : <p className="decription-text">{props.text}</p>}
		</motion.div>
	)
}

export default Projects
