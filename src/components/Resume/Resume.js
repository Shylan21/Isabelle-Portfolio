import './Resume.css'
// ----------------------------------------
import Contacts from '../Contacts/Contacts'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
// ---------------------------------------------------
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
			<main className="main-container">
				<h1 className="work-exp-title"> Work Experience</h1>
				{/* BOOLEAN */}
				<div className="boolean-exp">
					<span className="date"> 02/2023 - 09/2023 </span>
					<h1 className="titles"> Software Development Graduate </h1>
					<h2 className="titles"> Boolean UK </h2>
					<h4 className="titles"> Edinburgh, Scotland </h4>
					<ul>
						<li>Full-time 6-month coding academy in full-stack development.</li>
						<li>Created a front-end and a back-end Personal Project</li>
						<li>
							Front-end project: Recreated a shop platform using HTML, CSS,
							React, and JavaScript.
						</li>
						<li>
							Back-end project: Developed a movie tracker app utilising React,
							CSS, Prisma, PostgreSQL, and Node.js
						</li>
						<li>Worked on two Team Dev Simulations.</li>
						<li>
							Completed challenges with adherence to deadlines and requirements.
						</li>
					</ul>
					<p>
						HTML | CSS | JavaScript | React | Node.js | Prisma | Express |
						PostgreSQL | TDD | OOP | Agile
					</p>
				</div>
				{/* CHEF */}
				<div className="chef-exp">
					<span className="date"> 06/2019 - 08/2023 </span>
					<h1 className="titles"> Chef De Partie </h1>
					<h2 className="titles"> Kyloe, Signature Pubs </h2>
					<h4 className="titles"> Edinburgh, Scotland </h4>
					<ul>
						<li>Supervised colleagues.</li>
						<li>Trained new hires.</li>
						<li>Managed kitchen timing and order coordination.</li>
						<li>Utilised efficient communication.</li>
						<li>Engaged in on-the-spot problem-solving.</li>
						<li>Demonstrated strong organisational skills.</li>
						<li>Committed to continuous learning.</li>
						<li>Contributed to successful kitchen projects.</li>
						<li>
							Maintained strict quality control for exceptional dining
							experiences.
						</li>
					</ul>
        </div>
        
			</main>
			{/* FOOTER */}
			<Contacts />
			<ScrollToTop />
		</>
	)
}

export default Resume
