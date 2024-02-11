import './Certificates.css'

function Certificates(props) {
	return (
		<div id={props.id} className="certificates">
			<img className="certificates-image" src={props.image} alt="" />
			{/* {props.hideText ? '' : <p className="certificate-text">{props.text}</p>} */}
		</div>
	)
}

export default Certificates
