import { Outlet } from 'react-router-dom';
import NavLink from '../../../components/links/NavLink';
// import ThemeToggler from '../../../components/ThemeToggler';

const currentDate = new Date();

const RootLayout = () => {
	return (
		<div className="relative min-h-screen w-full flex flex-col justify-between items-center bg-gray-900 text-white">
			<header className="container lg:max-w-5xl mx-auto mt-6 mb-20 flex justify-end px-4">
				<nav className="text-gray-400 font-medium tracking-wider">
					<ul className="flex gap-4 lg:gap-6 items-center">
						<NavLink to="/">
							<i className="ri-home-smile-line ri-lg" />
						</NavLink>
						<NavLink to="/skills">Skills</NavLink>
						<NavLink to="/projects">Projects</NavLink>
						{/* <li>
							<ThemeToggler />
						</li> */}
					</ul>
				</nav>
			</header>
			<main className="container lg:max-w-5xl mx-auto flex flex-1 flex-col w-full  px-4">
				<Outlet />
			</main>
			<footer className="text-sm mt-8 mb-4 max-w-5xl text-gray-200">
				©{currentDate.getFullYear()} -{' '}
				<a
					className="hover:underline"
					href={process.env.REACT_APP_MAIL_TO || ''}
				>
					Italo Nabuco
				</a>
			</footer>
		</div>
	);
};

export default RootLayout;
