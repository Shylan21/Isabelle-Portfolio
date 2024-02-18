import './Resume.css'
import { useNavigate } from 'react-router-dom'

const Resume = () => {
	const navigate = useNavigate()

	return (
		<div className="resume">
			<button className="go-back" onClick={() => navigate('/')}>
				{' '}
				Go Back{' '}
			</button>
			<h1 className="education">Education</h1>
		</div>
	)
}

export default Resume
