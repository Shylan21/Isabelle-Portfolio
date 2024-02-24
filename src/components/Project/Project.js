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
				style={{ objectFit: 'cover' }}
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
					padding: '20px',
				 
				}}
			>
				<a href={props.link} target='_blank' rel='noreferrer'>
					{' '}
					{props.hideText ? (
						''
					) : (
						<h1 className="project-name" style={{ textAlign: 'left' }}>
							{props.projectName}
						</h1>
					)}
					{props.hideText ? (
						''
					) : (
						<h4 className="description-text">{props.description}</h4>
					)}
				</a>
			</motion.div>
		</motion.div>
	)
}

export default Projects
