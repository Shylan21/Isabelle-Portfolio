import './AboutMe.css'
import profilePic from '../../pictures/foto.png'


const AboutMe = () => {
	return (
		<main>
			<div className="about-me-container" id="about-me" >
				<h1 className="about-me-title"> A Bit About Me</h1>
				<img className="about-me-image" src={profilePic} alt="" />
				<p className="about-me-text">
					{' '}
					My journey into the world of technology was preceded by a
					distinguished 10-year career in the hospitality industry, where I
					honed my skills as a chef. This unique blend of experience has
					equipped me with a deep understanding of teamwork, time management,
					adaptability, and attention to detail; qualities that seamlessly
					translate into my career as a software developer. I am excited to
					leverage my passion for technology and my newly acquired software
					development knowledge to excel as a junior software developer.
				</p>

				<button className="resume-button">Resume</button>
			</div>
		</main>
	)
}

export default AboutMe
