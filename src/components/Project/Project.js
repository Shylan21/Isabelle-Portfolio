import './Project.css'
import { motion } from 'framer-motion'
function Projects(props) {
	return (
		<motion.div
			id={props.id}
			className="projects"
			initial={{ opacity: 0, translateX: -20, translateY: -40 }}
			whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
			transition={{ duration: 1.3 }}
		>
			<img
				className="project-image"
				src={props.image}
				alt=""
				// whileHover={{ scale: 1.1 }} /* Oppure .95 */
				// transition={{ duration: 0.5 }}
			/>
			<motion.div
				className="hover-layer"
				initial={{ opacity: 0, translateX: 0, translateY: 0 }}
				whileHover={{
					scale: 1.1,
					opacity: 0.8,
					translateX: 0,
					translateY: 0,
				}}
				transition={{ duration: 0.5 }}
				style={{
					background: ' #373737',
					color: '#ffff',
					padding: '5px',
					placeContent: 'center',
				}}
			>
				{props.hideText ? (
					''
				) : (
					<p className="project-name">{props.projectName}</p>
				)}
				{props.hideText ? (
					''
				) : (
					<p className="description-text">{props.description}</p>
				)}
			</motion.div>
		</motion.div>
	)
}

export default Projects
