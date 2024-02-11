import './Skill.css'

function Skill(props) {
	return (
		<div id={props.id} className="skill">
			<img className="skill-image" src={props.image} alt="" />
			{props.hideText ? '' : <p className="skill-text">{props.text}</p>}
		</div>
	)
}

export default Skill
