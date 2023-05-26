import { useState } from 'react';

const ThemeToggler: React.FC = () => {
	const [isLight, setLight] = useState(true);

	return (
		<div
			className="relative h-8 w-18 bg-gray-800 flex items-center justify-between rounded-full text-white border-2 box-content border-gray-500 group"
			onClick={() => setLight(!isLight)}
		>
			<div
				className={`rounded-full h-8 w-8 bg-gray-600 absolute z-0 transition-all ${
					isLight ? 'left-0' : 'left-full -translate-x-full'
				}`}
			/>
			<i className="w-8 h-8 ri-sun-line flex justify-center items-center z-10"></i>
			<i className="w-8 h-8 ri-moon-line flex justify-center items-center z-10"></i>
		</div>
	);
};

export default ThemeToggler;
