import './Contacts.css'

const Contacts = () => {
	return (
		<footer className="footer" id="contacts">
			<div className="bgk-footer">
				<div className="number">
					<div className="footer-row">
						<h3>Call</h3>
						<p>+44 (0) 7741975022</p>
					</div>
				</div>
				<div className="email">
					<div className="footer-row">
						<h3>Email</h3>
						<p>isabelle.tartarelli@outlook.com</p>
					</div>
				</div>
				<div className="links">
					<div className="footer-row">
						<h3>My Links:</h3>
						<div className="github-link">
							<h4>
								<a
									href="https://github.com/Shylan21"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
							</h4>
						</div>
						<div className="linkedin-link">
							<h4>
								<a
									href="https://www.linkedin.com/in/isabelle-tartarelli/"
									target="_blank"
									rel="noreferrer"
								>
									LinkedIn{' '}
								</a>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Contacts
