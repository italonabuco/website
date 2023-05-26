export type ComponentWithChildren<K = unknown> = React.FC<
	{
		children?: React.ReactNode;
	} & K
>;
