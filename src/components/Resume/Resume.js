import './Resume.css'
// ----------------------------------------
import TopBar from './TopBar'
import BooleanExp from './WorkExperience/BooleanExp'
import ChefExp from './WorkExperience/ChefExp'
import Contacts from '../Contacts/Contacts'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import BooleanEd from './Education/Boolean'
import WebDev from './Education/WebDevelopment'
import IntroToCode from './Education/IntroToCoding'
import Diploma from './Education/Diploma'
import OneDev from './WorkExperience/OneDevAway'
import { useEffect } from 'react'

const Resume = () => {
	useEffect(() => window.scrollTo(0, 0)) // When the component mounts

	return (
		<div className="container">
			{/* TOP BAR  */}
			<TopBar />
			{/* SECTION - WORK */}
			<h1 className="work-exp-title">Work Experience</h1>
			<section className="exp-container">
				{/* ONEDEVAVAY */}
				<OneDev />
				{/* BOOLEAN */}
				<BooleanExp />
				{/* CHEF */}
				<ChefExp />
			</section>
			{/* SECTION - EDUCATION */}
			<h1 className="education-title"> Education</h1>
			<section className="education-container">
				<BooleanEd />
				<WebDev />
				<IntroToCode />
				<Diploma />
			</section>
			{/* FOOTER */}
			<Contacts />
			<ScrollToTop />
		</div>
	)
}

export default Resume
