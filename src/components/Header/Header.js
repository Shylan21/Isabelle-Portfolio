import './Header.css'

import background from '../../pictures/picture.jpeg'

const Header = () => {
	const scrollToComponent = (id) => {
		const component = document.getElementById(id)
		if (component) {
			component.scrollIntoView({ behavior: 'smooth' })
		}
	}
	return (
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
					<button onClick={() => scrollToComponent('aboutMe')}>About Me</button>
					<button onClick={() => scrollToComponent('projects')}>
						Projects
					</button>
					<button onClick={() => scrollToComponent('certificates')}>
						Certificates
					</button>
					<button onClick={() => scrollToComponent('skills')}>Skills</button>
					<button onClick={() => scrollToComponent('contacts')}>Contacts</button>
				</div>
			</div>
		</header>
	)
}
export default Header
