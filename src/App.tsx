import PersonalPic from './assets/imgs/photo-nobg.png';
import ThemeToggler from './components/ThemeToggler';
import ExternalLink from './components/links/ExternalLink';
import NavLink from './components/links/NavLink';

function App() {
	return (
		<div className="relative h-screen flex w-full items-center bg-gray-900">
			<header className="container mx-auto text-white">
				<nav className="absolute right-10 top-10 text-gray-400 font-medium tracking-wider">
					<ul className="flex gap-6 items-center">
						<NavLink>
							<i className="ri-home-smile-line ri-lg" />
						</NavLink>
						<NavLink>About</NavLink>
						<NavLink>Skills</NavLink>
						<NavLink>Projects</NavLink>
						<li>
							<ThemeToggler />
						</li>
					</ul>
				</nav>
				<div className="mx-auto flex items-center justify-between max-w-5xl">
					<div>
						<span className="text-4xl font-medium tracking-wider font-serif">
							Hey! I&apos;m
						</span>
						<h1 className="text-8xl font-medium text-primary-500 font-serif tracking-wide">
							Italo Nabuco,
						</h1>

						<h2 className="text-4xl opacity-90 tracking-wide">
							a Software Developer.
						</h2>
						<h3 className="text-xl mt-5 mb-4 tracking-wide opacity-90">
							I help companies deliver shining applications.
						</h3>
						<div className="flex flex-nowrap gap-4 mt-4">
							<ExternalLink
								href="https://github.com/italonabuco"
								iconClass="ri-github-fill"
							/>
							<ExternalLink
								href="https://www.linkedin.com/in/italo-nabuco/"
								iconClass="ri-linkedin-box-fill"
							/>
							<ExternalLink
								href={process.env.REACT_APP_RESUME_LINK || ''}
								iconClass="ri-file-list-3-line"
								label="Resumé"
							/>
							<ExternalLink
								href="mailto:italonabuco@hotmail.com?subject=Let's%20talk&body=I%20saw%20your%20website."
								iconClass="ri-mail-send-fill"
								label="italonabuco@hotmail.com"
							/>
						</div>
					</div>
					<img
						src={PersonalPic}
						alt="Italo Nabuco"
						className="w-96 h-96 rounded-full bg-gray-700 bg-opacity-80"
					/>
				</div>
			</header>
		</div>
	);
}

export default App;
