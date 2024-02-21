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

const Resume = () => {
	return (
		<div className="container">
			{/* TOP BAR  */}
			<TopBar />
			{/* SECTION - WORK */}
			<section className="exp-container">
				<h1 className="work-exp-title">Work Experience</h1>
				{/* ONEDEVAVAY */}
				<OneDev />
				{/* BOOLEAN */}
				<BooleanExp />
				{/* CHEF */}
				<ChefExp />
			</section>
			{/* SECTION - EDUCATION */}
			<section className="education-container">
				<h1 className="education-title"> Education</h1>
				<BooleanEd />
				<WebDev />
				{/* <IntroToCode />
        <Diploma/>  */}
			</section>
			{/* FOOTER */}
			<Contacts />
			<ScrollToTop />
		</div>
	)
}

export default Resume
