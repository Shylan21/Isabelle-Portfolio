import './Resume.css'
// ----------------------------------------
import TopBar from './TopBar'
import BooleanExp from './WorkExperience/BooleanExp'
import ChefExp from './WorkExperience/ChefExp'
import Contacts from '../Contacts/Contacts'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const Resume = () => {

	return (
		<>
			{/* TOP BAR  */}
		
			<TopBar />
			{/* MAIN  */}
			<main className="main-container">
				<h1 className="work-exp-title"> Work Experience</h1>
				{/* BOOLEAN */}
				<BooleanExp />
				{/* CHEF */}
				<ChefExp />
			</main>
			{/* FOOTER */}
			<Contacts />
			<ScrollToTop />
		</>
	)
}

export default Resume
