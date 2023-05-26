import React from 'react';
import clsx from 'clsx';

type ExternalLinkType = {
	href: string;
	label?: string;
	iconClass?: string;
	onClick?: () => void;
};

const ExternalLink: React.FC<ExternalLinkType> = ({
	href,
	label,
	onClick,
	iconClass,
}) => {
	return (
		<a
			className="flex bg-gray-800 hover:text-white hover:bg-gray-700 cursor-pointer transition rounded-md py-2 px-3 items-center"
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
