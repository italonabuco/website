import { ComponentWithChildren } from '../../../types';

const NavLink: ComponentWithChildren = ({ children }) => {
	return (
		<li className="relative before:bg-green-500 before:absolute before:block before:w-full before:h-0.5 before:-bottom-0.5 before:left-0 before:bg-current before:scale-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-100 cursor-pointer">
			{children}
		</li>
	);
};

export default NavLink;
