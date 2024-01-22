import background from './pictures/picture.jpeg'
import profilePic from './pictures/foto.png'
import uomoshopfront from './proj-img/UomoShopFront.jpeg'
import movietracker from './proj-img/MovieTracker.jpeg'
import './App.css'

function App() {
	return (
		<div className="App">
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
						<button>Skills</button>
						<button>Contacts</button>
					</div>
				</div>
			</header>
			<div className="main-bkg">
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
					</div>
				</section>
			</div>
		</div>
	)
}

export default App
