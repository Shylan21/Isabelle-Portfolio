import background from './pictures/picture.jpeg'
import profilePic from './pictures/foto.png'
import uomoshopfront from './proj-img/UomoShopFront.jpeg'
import movietracker from './proj-img/MovieTracker.jpeg'
import wolframe from './proj-img/Wolframe.jpeg'
import spotify from './proj-img/Spotify.jpeg'
import streamlabs from './proj-img/Streamlabs.jpeg'
import weather from './proj-img/WeatherApp.jpeg'
import greengrocers from './proj-img/Greengrocers.jpeg'
import brewery from './proj-img/Brewery.jpeg'
import calculator from './proj-img/Calculator.jpeg'
import pokemoncards from './proj-img/PokemonCards.jpeg'
import shecodeintro from './certificates/SheCodesBasicCertificate.png'
import shecodeplus from './certificates/SheCodesPlusCertificate.png'
import boolean from './certificates/BooleanCertificate.png'
// ----------------------------------------------------
import html from './SvgSkills/HTML.png'
import css from './SvgSkills/CSS.png'
import js from './SvgSkills/JS.png'
import react from './SvgSkills/React.png'
import node from './SvgSkills/Node.js.png'
import sql from './SvgSkills/PostgreSQL.png'
import express from './SvgSkills/Express.png'
import tdd from './SvgSkills/TDD.png'
import oop from './SvgSkills/OOP.png'
import agile from './SvgSkills/Agile.png'
import bootstrap from './SvgSkills/Bootstrap.png'
import netlify from './SvgSkills/Netlify.png'
import vsc from './SvgSkills/VSCode.png'
import cdsndbx from './SvgSkills/CodeSandbox.png'
import insomnia from './SvgSkills/Insomnia.png'
import github from './SvgSkills/GitHub.png'
import notion from './SvgSkills/Notion.png'
import tlbplus from './SvgSkills/TablePlus.png'
import git from './SvgSkills/Git.png'
import codepen from './SvgSkills/CodePen.png'
import invision from './SvgSkills/InVision.png'
import figma from './SvgSkills/Figma.png'
// -----------------------------------------------------
import './App.css'

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
				<main>
					<div className="about-me-container">
						<h1 className="about-me-title"> A Bit About Me</h1>
						<img className="about-me-image" src={profilePic} alt="" />
						<p className="about-me-text">
							{' '}
							My journey into the world of technology was preceded by a
							distinguished 10-year career in the hospitality industry, where I
							honed my skills as a chef. This unique blend of experience has
							equipped me with a deep understanding of teamwork, time
							management, adaptability, and attention to detail; qualities that
							seamlessly translate into my career as a software developer. I am
							excited to leverage my passion for technology and my newly
							acquired software development knowledge to excel as a junior
							software developer.
						</p>

						<button className="resume-button">Resume</button>
					</div>
				</main>
				{/* PROJECTS */}
				<section className="projects-section">
					<h1 className="project-title">Projects</h1>
					<div className="projects-pics">
						<img
							className="uomo-shopfront"
							style={{ backgroundImage: `url(${uomoshopfront})` }}
							alt=""
						/>
						<img
							className="movietracker"
							style={{ backgroundImage: `url(${movietracker})` }}
							alt=""
						/>
						<img
							className="wolframe"
							style={{ backgroundImage: `url(${wolframe})` }}
							alt=""
						/>
						<img
							className="spotify"
							style={{ backgroundImage: `url(${spotify})` }}
							alt=""
						/>
						<img
							className="greengrocers"
							style={{ backgroundImage: `url(${greengrocers})` }}
							alt=""
						/>
						<img
							className="weather"
							style={{ backgroundImage: `url(${weather})` }}
							alt=""
						/>
						<img
							className="pokemoncards"
							style={{ backgroundImage: `url(${pokemoncards})` }}
							alt=""
						/>
						<img
							className="streamlabs"
							style={{ backgroundImage: `url(${streamlabs})` }}
							alt=""
						/>
						<img
							className="brewery"
							style={{ backgroundImage: `url(${brewery})` }}
							alt=""
						/>
						<img
							className="calculator"
							style={{ backgroundImage: `url(${calculator})` }}
							alt=""
						/>
					</div>
				</section>
				{/* CERTIFICATES */}
				<section className="certificates-section">
					<h1 className="certificates-title">Certificates</h1>
					<div className="certificates">
						<img
							className="shecodeintro"
							style={{ backgroundImage: `url(${shecodeintro})` }}
							alt=""
						/>
						<img
							className="shecodeplus"
							style={{ backgroundImage: `url(${shecodeplus})` }}
							alt=""
						/>
						<img
							className="boolean"
							style={{ backgroundImage: `url(${boolean})` }}
							alt=""
						/>
					</div>
				</section>
				{/* SKILLS */}
				<section className="skills-section">
					<h1 className="skills-title">Skills</h1>
					<div className="bkg-skill-section">
						<img
							className="html"
							style={{ backgroundImage: `url(${html})` }}
							alt=""
						/>
						{/* <p>HTML</p> */}
						<img
							className="css"
							style={{ backgroundImage: `url(${css})` }}
							alt=""
						/>
						<img
							className="js"
							style={{ backgroundImage: `url(${js})` }}
							alt=""
						/>
						<img
							className="react"
							style={{ backgroundImage: `url(${react})` }}
							alt=""
						/>
						<img
							className="node"
							style={{ backgroundImage: `url(${node})` }}
							alt=""
						/>
						<img
							className="sql"
							style={{ backgroundImage: `url(${sql})` }}
							alt=""
						/>
						<img
							className="express"
							style={{ backgroundImage: `url(${express})` }}
							alt=""
						/>
						<img
							className="tdd"
							style={{ backgroundImage: `url(${tdd})` }}
							alt=""
						/>
						<img
							className="oop"
							style={{ backgroundImage: `url(${oop})` }}
							alt=""
						/>
						<img
							className="agile"
							style={{ backgroundImage: `url(${agile})` }}
							alt=""
						/>
						<img
							className="bootstrap"
							style={{ backgroundImage: `url(${bootstrap})` }}
							alt=""
						/>
						<img
							className="netlify"
							style={{ backgroundImage: `url(${netlify})` }}
							alt=""
						/>
						<img
							className="vsc"
							style={{ backgroundImage: `url(${vsc})` }}
							alt=""
						/>
						<img
							className="cdsndbx"
							style={{ backgroundImage: `url(${cdsndbx})` }}
							alt=""
						/>
						<img
							className="insomnia"
							style={{ backgroundImage: `url(${insomnia})` }}
							alt=""
						/>
						<img
							className="github"
							style={{ backgroundImage: `url(${github})` }}
							alt=""
						/>
						<img
							className="notion"
							style={{ backgroundImage: `url(${notion})` }}
							alt=""
						/>
						<img
							className="tblplus"
							style={{ backgroundImage: `url(${tlbplus})` }}
							alt=""
						/>
						<img
							className="git"
							style={{ backgroundImage: `url(${git})` }}
							alt=""
						/>
						<img
							className="codepen"
							style={{ backgroundImage: `url(${codepen})` }}
							alt=""
						/>
						<img
							className="invision"
							style={{ backgroundImage: `url(${invision})` }}
							alt=""
						/>
						<img
							className="figma"
							style={{ backgroundImage: `url(${figma})` }}
							alt=""
						/>
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
		</div>
	)
}

export default App
