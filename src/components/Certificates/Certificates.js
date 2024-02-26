import './Certificates.css'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
function Certificates(props) {
	const controls = useAnimation()

	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [isInView, controls])

	return (
		<motion.div
			id={props.id}
			className="certificates"
			ref={ref}
			variants={{
				hidden: { opacity: 0, x: 20, y: 30 },
				visible: { opacity: 1, x: 0, y: 0 },
			}}
			animate={controls}
	
			transition={{ duration: 1.3 }}
		>
			<img className="certificates-image" src={props.image} alt="" />
		</motion.div>
	)
}

export default Certificates
