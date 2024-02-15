import background from './pictures/picture.jpeg'
// import profilePic from './pictures/foto.png'
// ----------------------------------------------------
import './App.css'
import { useRef } from 'react'
// ----------------------------------------------------
import Skill from './components/Skill/Skill'
import Project from './components/Project/Project'
import Certificates from './components/Certificates/Certificates'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import AboutMe from './components/AboutMe/AboutMe'

const skills = require('./components/Skill/skill-data').skills
const projects = require('./components/Project/project-data').projects
const certificates =
	require('./components/Certificates/certificate-data').certificates

function App() {

	return (
		<div className="App">
			{/* HEADER */}
			<header>
				<img
					className="bkg-img"
					style={{ backgroundImage: `url(${background})` }}
					alt=""
				/>
				<div className="bkg-shadow">
					<h1>Welcome</h1>
					<h2>
						I'm Isabelle, a Full-Stack Software Developer living in Scotland.
					</h2>
					<div className="button-container">
						<button>About Me</button>
						<button>Projects</button>
						<button>Certificates</button>
						<button>Skills</button>
						<button>Contacts</button>
					</div>
				</div>
			</header>
			<div className="main-bkg">
				{/* ABOUT ME */}
				<AboutMe />
				{/* PROJECTS */}
				<section className="projects-section">
					<h1 className="project-title">Projects</h1>
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
				<section className="certificates-section">
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
				<section className="skills-section">
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
				<footer className="footer">
					<div className="bgk-footer">
						<div className="number">
							<div className="footer-row">
								<h3>Call</h3>
								<p>---------</p>
							</div>
						</div>
						<div className="email">
							<div className="footer-row">
								<h3>Email</h3>
								<p>-----------</p>
							</div>
						</div>
						<div className="links">
							<div className="footer-row">
								<h3>My Links</h3>
								<div className="github-link">
									<h4>Github:</h4>
									<p>https://github.com/Shylan21</p>
								</div>
								<div className="linkedin-link">
									<h4>LinkedIn:</h4>
									<p>https://www.linkedin.com/in/isabelle-tartarelli/</p>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
			<ScrollToTop />
		</div>
	)
}

export default App
