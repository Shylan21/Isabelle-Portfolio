import './Header.css'

import background from '../../pictures/picture.jpeg'

const Header = () => {
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
					<button>About Me</button>
					<button>Projects</button>
					<button>Certificates</button>
					<button>Skills</button>
					<button>Contacts</button>
				</div>
			</div>
		</header>
	)
}
export default Header
