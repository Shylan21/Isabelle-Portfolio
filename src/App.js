import background from './pictures/picture.jpeg'
import './App.css'

function App() {
	return (
		<div className="App">
			<header>
       <img className="bkg-img" style={{ backgroundImage: `url(${background})` }} alt=""/>
			</header>
		</div>
	)
}

export default App
