export type CustomComponent<K = unknown> = React.FC<
	{
		children?: React.ReactNode;
		className?: string;
	} & K
>;
