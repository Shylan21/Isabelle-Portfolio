// ----------------------------------------------------
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
// ----------------------------------------------------
/* Importing Components  */
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Project from './components/Project/Project'
import Certificates from './components/Certificates/Certificates'
import Skill from './components/Skill/Skill'
import Contacts from './components/Contacts/Contacts'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Resume from './components/Resume/Resume'

const skills = require('./components/Skill/skill-data').skills
const projects = require('./components/Project/project-data').projects
const certificates =
	require('./components/Certificates/certificate-data').certificates

function App() {
	const controls = useAnimation()

	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [isInView, controls])

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
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
												projectName={x.projectName}
												description={x.description}
												link={x.link}
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
								<motion.section
									className="skills-section"
									id="skills"
									ref={ref}
									variants={{
										hidden: { opacity: 0, scale: 1.1 },
										visible: { opacity: 1, scale: 1 },
									}}
									animate={controls}
									transition={{ duration: 0.7, ease: 'easeIn' }}
								>
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
								</motion.section>
								{/* FOOTER */}
								<Contacts />
							</div>
							{/* SCROLL TO TOP BUTTON */}
							<ScrollToTop />
							{/* UPDATES */}
							<div className="sliderContainer">
								<div className="slider-updates">
									<p className="slider-text">
										Stay tuned for the Mobile Version!✨🤘🏼
									</p>
									<p className="slider-text">
										Stay tuned for the Mobile Version!✨🤘🏼
									</p>
									<p className="slider-text">
										Stay tuned for the Mobile Version!✨🤘🏼
									</p>
									<p className="slider-text">
										Stay tuned for the Mobile Version!✨🤘🏼
									</p>
									<p className="slider-text">
										Stay tuned for the Mobile Version!✨🤘🏼
									</p>
									<p className="slider-text">
										Stay tuned for the Mobile Version!✨🤘🏼
									</p>
									<p className="slider-text">
										Stay tuned for the Mobile Version!✨🤘🏼
									</p>
									<p className="slider-text">
										Stay tuned for the Mobile Version!✨🤘🏼
									</p>
									
								</div>
							</div>
						</div>
					}
				/>
				<Route path="/" element={<App />} />
				<Route path="/resume" element={<Resume />} />
			</Routes>
		</Router>
	)
}

export default App
