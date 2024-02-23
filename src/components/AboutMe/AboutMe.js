import './AboutMe.css'
import profilePic from '../../pictures/foto.png'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const AboutMe = () => {
	const navigate = useNavigate()

	return (
		<main>
			<motion.div
				className="about-me-container"
				id="aboutMe"
				initial={{ opacity: 0, scale: 0.5 }}
				whileInView={{  opacity: 1, scale: 1 }}
				transition={{ duration: 1, ease: 'easeIn' }}
			>
				<h1 className="about-me-title"> A Bit About Me</h1>
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
				<motion.button
					className="resume-button"
					onClick={() => navigate('/resume')}
					whileHover={{ scale: 1.05 }}
				>
					Resume
				</motion.button>
			</motion.div>
		</main>
	)
}

export default AboutMe
