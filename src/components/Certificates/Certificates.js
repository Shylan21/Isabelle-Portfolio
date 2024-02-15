import './Certificates.css'

function Certificates(props) {
	return (
		<div id={props.id} className="certificates">
			<img className="certificates-image" src={props.image} alt="" />
		</div>
	)
}

export default Certificates
