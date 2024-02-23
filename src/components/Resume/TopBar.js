import './Resume.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const TopBar = () => {
	const navigate = useNavigate()

	return (
		<div className="top-bar-bkg">
			<h1 className="title-resume">Resume</h1>
			<motion.button
				className="go-back"
				onClick={() => navigate('/')}
				whileHover={{ scale: 1.05 }}
			>
				{' '}
				Go Back{' '}
			</motion.button>
		</div>
	)
}
export default TopBar
