import clsx from 'clsx';
import { CustomComponent } from '../../../types';

const SectionHeader: CustomComponent = ({ className, children }) => {
	return (
		<h3
			className={clsx(
				'relative text-gray-200 tracking-wider font-medium text-3xl mb-6',
				className
			)}
		>
			{children}
			<div className="mt-2 h-1 w-14 bg-primary-500" />
		</h3>
	);
};
export default SectionHeader;
