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

const Resume = () => {
	return (
		<>
			{/* TOP BAR  */}
			<TopBar />
			{/* SECTION - WORK */}
			<section className="exp-container">
				<h1 className="work-exp-title"> Work Experience</h1>
				{/* BOOLEAN */}
				<BooleanExp />
				{/* CHEF */}
				<ChefExp />
			</section>
			{/* SECTION - EDUCATION */}
			<section className="education-container">
        <h1 className="education-title"> Education</h1>
        <div className='schools'>
				<BooleanEd />
				<WebDev />
        <IntroToCode />
        <Diploma/> 

        </div>
			</section>
			{/* FOOTER */}
			<Contacts />
			<ScrollToTop />
		</>
	)
}

export default Resume
