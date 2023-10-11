import s from './aboutus.module.css'

export default function Aboutus() {
	return (
		<main className={s.aboutus}>
			<div className={s.heading}>
				<div className={s.container}>
					<h1>ABOUT US</h1>
					<h2>
						Empowering Communities through
						<br />
						Disaster Resilience and Education
					</h2>
				</div>
			</div>
			<div className={s.content}>
				<h1>What we do</h1>
				<p>
					EMBRACE aims to address several interconnected goals centred
					around amateur radio and its significance in disaster
					management, education, gender empowerment, promoting HAM
					radio and introducing innovative communication solutions in
					the coastal regions of the Karnataka state.
				</p>
				<br />
				<p>
					EMBRACE is a multifaceted project centered around leveraging
					amateur radio technology in coastal regions of Karnataka,
					India. Its objectives include establishing a dedicated
					on-campus infrastructure for amateur radio to enhance
					communication during emergencies, creating a Center for
					Experiential Learning in Amateur Radio to educate and build
					a knowledgeable community, introducing HAM radio technology
					to rural schools and colleges, developing mobile HAM
					solutions for reliable communication during disasters, and
					establishing 15 nodal centers for skill development in
					amateur radio. Overall, EMBRACE aims to empower communities,
					improve disaster management capabilities, and promote
					education and innovation through amateur radio technology.
				</p>
			</div>

			<div className={s.content}>
				<h1>Our Mission</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</div>

			<div className={s.content}>
				<h1>Our Vision</h1>
				<div className={s.cards}>
					<div className={s.card}>
						<h2>Sustainability</h2>
						<p>
							EMBRACE aims to become self-sustained, securing
							support from various sources like government grants,
							corporate partnerships, philanthropy, alumni
							contributions, NITK support, and community
							involvement.
						</p>
					</div>

					<div className={s.card}>
						<h2>Resource Sharing</h2>
						<p>
							EMBRACE will collaborate closely with MARC to ensure
							that the resources it develops, including HAM radio
							equipment, mobile stations, and educational
							materials, are accessible to empower disaster
							resilience and education.
						</p>
					</div>

					<div className={s.card}>
						<h2>Curriculum Integration & Open Access</h2>
						<p>
							EMBRACE intends to integrate its educational
							resources into formal academic systems, particularly
							within NITK's curriculum, and continues to emphasize
							open access, making its content freely available to
							a global audience.
						</p>
					</div>

					<div className={s.card}>
						<h2>Innovation and Research</h2>
						<p>
							EMBRACE is committed to fostering innovation and
							research in disaster management and amateur radio
							through conferences, symposiums, and workshops.
						</p>
					</div>

					<div className={s.card}>
						<h2>Long-term Impact</h2>
						<p>
							EMBRACE's future vision is characterized by
							sustainability, expansion, technological
							advancement, collaboration, adaptability, and a deep
							commitment to empowering communities. It aspires to
							be a beacon of disaster resilience and amateur radio
							education, making a lasting positive impact.
						</p>
					</div>

					<div className={s.card}>
						<h2>Sustainability</h2>
						<p>
							EMBRACE aims to become self-sustained, securing
							support from various sources like government grants,
							corporate partnerships, philanthropy, alumni
							contributions, NITK support, and community
							involvement.
						</p>
					</div>
				</div>

				<p>
					In essence, EMBRACE envisions a future where disaster
					resilience, unbreakable communication, and education
					empowerment are widespread realities, achieved through
					sustainability, innovation, and community collaboration.
				</p>
			</div>

			<div className={s.content}>
				<h1>Supporting Partners</h1>
				<img src="/stakeholders.png" alt="" />
			</div>

			<div className={s.content}>
				<h1>Team</h1>
				<div className={s.coreteam}>
					<h2>Core Team</h2>
					<div className={s.cards}>
						<div className={s.card}>
							<img src="./KVG.png" alt="" />
							<h2>Dr. K. V. Gangadharan</h2>
							<div className={s.designation}>
								<p>Project Head</p>
								<h3>EMBRACE</h3>
							</div>
							<div>
								<a href="mailto:kvganga@nitk.edu.in">
									<img src="./email.png" id={s.email} alt="Email" />
								</a>
								<a href="https://www.linkedin.com/in/kvganga/">
									<img src="./linkedin.png" alt="LinkedIn" />
								</a>
							</div>
						</div>
						<div className={s.card}>
							<img src="./PU.png" alt="" />
							<h2>Dr. Pruthviraj Umesh</h2>
							<div className={s.designation}>
								<p>Execution Head</p>
								<h3>EMBRACE</h3>
							</div>
							<div>
								<a href="mailto:pruthviu@nitk.edu.in">
									<img src="./email.png" id={s.email} alt="Email" />
								</a>
								<a href="https://www.linkedin.com/in/dr-pruthviraj-u/">
									<img src="./linkedin.png" alt="LinkedIn" />
								</a>
							</div>
						</div>
						<div className={s.card}>
							<img src="./mohit.jpg" alt="" />
							<h2>Dr. Mohit P. Tahiliani</h2>
							<div className={s.designation}>
								<p>Open Source Head</p>
								<h3>EMBRACE</h3>
							</div>
							<div>
								<a href="mailto:tahiliani@nitk.edu.in">
									<img src="./email.png" id={s.email} alt="Email" />
								</a>
								<a href="https://www.linkedin.com/in/mohittahiliani/">
									<img src="./linkedin.png" alt="LinkedIn" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<h2>HAM Operating Team</h2>
				<div class={s.otherteam}>
					<div class={s.member}>
						<img src="./mohit.jpg" alt="Member 1" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
					<div class={s.member}>
						<img src="./PU.png" alt="Member 2" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
					<div class={s.member}>
						<img src="./mohit.jpg" alt="Member 3" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
					<div class={s.member}>
						<img src="./PU.png" alt="Member 4" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
				</div>

				<h2>Project Managers</h2>
				<div class={s.otherteam}>
					<div class={s.member}>
						<img src="./mohit.jpg" alt="Member 1" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
					<div class={s.member}>
						<img src="./PU.png" alt="Member 2" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
					<div class={s.member}>
						<img src="./mohit.jpg" alt="Member 3" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
					<div class={s.member}>
						<img src="./PU.png" alt="Member 4" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
				</div>

				<h2>Support Team</h2>
				<div class={s.otherteam}>
					<div class={s.member}>
						<img src="./mohit.jpg" alt="Member 1" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
					<div class={s.member}>
						<img src="./PU.png" alt="Member 2" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
					<div class={s.member}>
						<img src="./mohit.jpg" alt="Member 3" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
					<div class={s.member}>
						<img src="./PU.png" alt="Member 4" />
						<div>
							<h3>John Doe</h3>
							<p>Designation</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
