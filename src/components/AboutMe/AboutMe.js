import './AboutMe.css'
import profilePic from '../../pictures/foto.png'
import { useNavigate } from 'react-router-dom'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const AboutMe = () => {
	const navigate = useNavigate()
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
		<motion.section
			className="aboutMe-section"
			id="aboutMe"
			ref={ref}
			variants={{
				hidden: { opacity: 0, scale: 0.5 },
				visible: { opacity: 1, scale: 1 },
			}}
			animate={controls}
			transition={{ duration: 0.7, ease: 'easeIn' }}
		>
			<h1 className="about-me-title"> A Bit About Me</h1>
			<div className="about-me-content">
				<img className="about-me-image" src={profilePic} alt="" />
				<p className="about-me-text">
					{' '}
					I'm Isabelle, a Full-Stack Software Developer living in Scotland. My
					journey into the world of technology was preceded by a distinguished
					10-year career in the hospitality industry, where I honed my skills as
					a chef. This unique blend of experience has equipped me with a deep
					understanding of teamwork, time management, adaptability, and
					attention to detail; qualities that seamlessly translate into my
					career as a software developer. I am excited to leverage my passion
					for technology and my newly acquired software development knowledge to
					excel as a junior software developer.
				</p>
			</div>
			<motion.button
				className="resume-button"
				onClick={() => navigate('/resume')}
				variants={{
					hidden: { x: '350%' },
					visible: { x: '350%' },
				}}
				animate={controls}
				whileHover={{ scale: 1.05 }}
			>
				Resume
			</motion.button>
		</motion.section>
	)
}

export default AboutMe
