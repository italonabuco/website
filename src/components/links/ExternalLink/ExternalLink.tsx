import React from 'react';
import clsx from 'clsx';
import { CustomComponent } from '../../../types';

type ExternalLinkType = {
	href: string;
	label?: string;
	iconClass?: string;
	onClick?: () => void;
};

const ExternalLink: CustomComponent<ExternalLinkType> = ({
	href,
	label,
	onClick,
	iconClass,
	className,
}) => {
	return (
		<a
			className={clsx(
				'flex bg-gray-800 hover:text-white hover:bg-gray-700 cursor-pointer transition rounded-md py-2 px-3 items-center',
				className
			)}
			rel="noreferrer"
			target="_blank"
			href={href}
		>
			{iconClass && (
				<i
					className={clsx(
						'ri-lg text-green-500',
						{
							'mr-2': label,
						},
						iconClass
					)}
				/>
			)}
			{label && <span className="font-medium">{label}</span>}
		</a>
	);
};
export default ExternalLink;
