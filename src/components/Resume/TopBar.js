import './Resume.css'
import { useNavigate } from 'react-router-dom'

const TopBar = () => {
	const navigate = useNavigate()

	return (
		<div className="top-bar-bkg">
			<h1 className="title-resume">Resume</h1>
			<button className="go-back" onClick={() => navigate('/')}>
				{' '}
				Go Back{' '}
			</button>
		</div>
	)
}
export default TopBar
