import background from './pictures/picture.jpeg'
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
		</div>
	)
}

export default App
