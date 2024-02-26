import './Skill.css'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Skill(props) {
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
			className="skill"
			ref={ref}
			variants={{
				hidden: { x: 0, opacity: 0, scale: 0.5 },
				visible: { x: 0, opacity: 1, scale: 1 },
			}}
			transition={{ duration: 0.7 }}
		>
			<img className="skill-image" src={props.image} alt="" />
			{props.hideText ? '' : <p className="skill-text">{props.text}</p>}
		</motion.div>
	)
}

export default Skill
