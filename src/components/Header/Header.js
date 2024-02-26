import './Header.css'

import background from '../../assets/pictures/BkgFoto.jpeg'
import { motion, MotionConfig } from 'framer-motion'

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
					<MotionConfig whileHover={{ scale: 1.05 }}>
						<motion.button onClick={() => scrollToComponent('aboutMe')}>
							About Me
						</motion.button>
						<motion.button onClick={() => scrollToComponent('projects')}>
							Projects
						</motion.button>
						<motion.button onClick={() => scrollToComponent('certificates')}>
							Certificates
						</motion.button>
						<motion.button onClick={() => scrollToComponent('skills')}>
							Skills
						</motion.button>
						<motion.button onClick={() => scrollToComponent('contacts')}>
							Contacts
						</motion.button>
					</MotionConfig>
				</div>
			</div>
		</header>
	)
}
export default Header
