import './Project.css'

function Projects(props) {
	return (
		<div id={props.id} className="projects">
			<img className="project-image" src={props.image} alt="" />
			{props.hideText ? '' : <p className="decription-text">{props.text}</p>}
		</div>
	)
}

export default Projects
