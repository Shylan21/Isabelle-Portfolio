import './Project.css'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
function Projects(props) {
	const controls = useAnimation()

	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [isInView, controls])

	return (
		<motion.div
		id={props.id}
		className="project"
		ref={ref}
			variants={{
				hidden: { opacity: 0, x: -20, y: -40 },
				visible: { opacity: 1, x: 0, y: 0 },
			}}
			animate={controls}
			transition={{ duration: 1.3 }}
		>
			<img className="project-image" src={props.image} alt="" />
			<motion.div
				className="hover-layer"
				initial={{ opacity: 0, translateX: 0, translateY: 0 }}
				whileHover={{
					// scale: 1,
					opacity: 0.8,
					translateX: 0,
					translateY: 0,
				}}
				transition={{ duration: 0.5 }}
				style={{
					background: ' #373737',
					color: '#ffff',
				}}
			>
				<a href={props.link} target="_blank" rel="noreferrer">
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
