import SectionHeader from '../../components/texts/SectionHeader';
import { databases, languages, technologies } from '../../constants/skills';

const SkillsPage = () => {
	return (
		<>
			<SectionHeader>Technical Skills</SectionHeader>
			{(
				[
					['Languages', languages],
					['Databases', databases],
					['Technologies', technologies],
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
				] as [string, Array<any>][]
			).map(([title, data]) => (
				<>
					<h4 className="text-lg font-semibold mb-3">{title}</h4>
					<div className="flex flex-wrap gap-2 mb-8">
						{data.map(({ alt, src }) => (
							<img key={alt} className="h-8" {...{ alt, src }} />
						))}
					</div>
				</>
			))}
		</>
	);
};

export default SkillsPage;
