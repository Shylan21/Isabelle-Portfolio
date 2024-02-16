// ----------------------------------------------------
import './App.css'
// ----------------------------------------------------
/* Importing Components  */
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Project from './components/Project/Project'
import Certificates from './components/Certificates/Certificates'
import Skill from './components/Skill/Skill'
import Contacts from './components/Contacts/Contacts'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const skills = require('./components/Skill/skill-data').skills
const projects = require('./components/Project/project-data').projects
const certificates =
	require('./components/Certificates/certificate-data').certificates

function App() {
	return (
		<div className="App">
			{/* HEADER */}
			<Header />
			{/* MAIN DIV */}
			<div className="main-bkg">
				{/* ABOUT ME */}
				<AboutMe />
				{/* PROJECTS */}
				<section className="projects-section">
					<h1 className="project-title" id="projects">
						Projects
					</h1>
					<div className="projects-image">
						{projects.map((x, index) => (
							<Project
								key={index}
								id={x.id}
								className="projects"
								image={x.image}
								description={x.description}
								hideText={x.hideText}
							/>
						))}
					</div>
				</section>
				{/* CERTIFICATES */}
				<section className="certificates-section" id="certificates">
					<h1 className="certificates-title">Certificates</h1>
					<div className="certificates-image">
						{certificates.map((x, index) => (
							<Certificates
								key={index}
								id={x.id}
								className="certificates"
								image={x.image}
							/>
						))}
					</div>
				</section>
				{/* SKILLS */}
				<section className="skills-section" id="skills">
					<h1 className="skills-title">Skills</h1>
					<div className="bkg-skill-section">
						{skills.map((x, index) => (
							<Skill
								key={index}
								id={x.id}
								className="skill"
								image={x.image}
								text={x.text}
								hideText={x.hideText}
							/>
						))}
					</div>
				</section>
				{/* FOOTER */}
				<Contacts />
			</div>
			{/* SCROLL TO TOP BUTTON */}
			<ScrollToTop />
		</div>
	)
}

export default App
