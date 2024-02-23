import './Certificates.css'
import {motion} from 'framer-motion'
function Certificates(props) {
	return (
		<motion.div
			id={props.id}
			className="certificates"
			initial={{ opacity: 0, translateX: 20, translateY: 30 }}
			whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
			transition={{ duration: 1.3 }}
		>
			<img className="certificates-image" src={props.image} alt="" />
		</motion.div>
	)
}

export default Certificates
