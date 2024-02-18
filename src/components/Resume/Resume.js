import './Resume.css'

import { useNavigate } from 'react-router-dom'

const Resume = () => {
	const navigate = useNavigate()

  return (
    <>
    {/* TOP BAR  */}
		<div className="top-bar-bkg">
			<h1 className="title-resume">Resume</h1>
			<button className="go-back" onClick={() => navigate('/')}>
				{' '}
				Go Back{' '}
			</button>
    </div>
     {/* MAIN  */}
    <main>
        
    </main>
    </>
	)
}

export default Resume
