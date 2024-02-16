import './ScrollToTop.css'
import arrowup from '../../pictures/Arrow Up.png'
import React, { useState, useEffect } from 'react'

const ScrollToTop = () => {
	// const [showTopBtn, setShowTopBtn] = useState(false)
	
	// useEffect(() => {
	// 	window.addEventListener('scroll', () => {
	// 		if (window.scrollY > 400) {
	// 			setShowTopBtn(true)
	// 		} else {
	// 			setShowTopBtn(false)
	// 		}
	// 	})
	// }, [])
	// const goToTop = () => {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: 'smooth',
	// 	})
	// }
	const scroll = () => {
		//0, 0 just takes us to the top of the page
		window.scrollTo(0, 0)
	}

	return (
		<>
			<div class="scroll-container">
				<div class="top-button-container">
					<button class="top-button" onClick={scroll}>
						{' '}
						<img src={arrowup} alt="" class="arrow-up" />
					</button>
				</div>
			</div>
		</>
	)
}

export default ScrollToTop
