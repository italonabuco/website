import ExternalLink from '../../components/links/ExternalLink';
import PersonalPic from '../../assets/imgs/photo-nobg.png';
import { Link } from 'react-router-dom';
import { CustomComponent } from '../../types';
import SectionHeader from '../../components/texts/SectionHeader';

const CustomLink: CustomComponent<{ to: string }> = ({ to, children }) => {
	return (
		<Link className="text-primary-500 hover:underline" to={to}>
			{children}
		</Link>
	);
};

const HomePage = () => {
	return (
		<>
			<div className="mx-auto w-full flex items-center max-lg:flex-col-reverse justify-between">
				<div>
					<span className="max-lg:text-2xl text-4xl font-medium tracking-wider font-serif">
						Hey! I&apos;m
					</span>
					<h1 className="max-lg:text-5xl text-8xl font-medium text-primary-500 font-serif tracking-wide">
						Italo Nabuco,
					</h1>

					<h2 className="max-lg:text-xl text-4xl opacity-90 tracking-wide">
						a Software Developer.
					</h2>
					<h3 className="max-lg:text-base text-xl mt-5 mb-4 tracking-wide opacity-90">
						I help companies deliver shining applications.
					</h3>
					<div className="flex flex-wrap gap-4 mt-4">
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
							href={process.env.REACT_APP_MAIL_TO || ''}
							iconClass="ri-mail-send-fill"
							label="italonabuco@hotmail.com"
						/>
					</div>
				</div>
				<img
					src={PersonalPic}
					alt="Italo Nabuco"
					className="w-60 h-60 max-lg:w-40 max-lg:h-40 rounded-full bg-gray-700 bg-opacity-80"
				/>
			</div>
			<SectionHeader className="mt-20">About me</SectionHeader>
			<div className="max-w-3xl text-gray-400">
				<p className="mb-3">
					I&apos;m a{' '}
					<span className="font-semibold text-white">
						pixel-perfect dev and problem solver
					</span>
					. I&apos;ve been working as a full-stack developer{' '}
					<span className="font-semibold text-white">since 2018</span>
					.
				</p>
				<p className="mb-3">
					I am a big traveling fan and language enthusiast. I am
					proficient in{' '}
					<span className="font-semibold text-white">
						English (fluent)
					</span>
					, and I&apos;m learning Japanese and Korean.{' '}
					<span className="font-semibold text-white">
						I&apos;m from Brazil
					</span>{' '}
					by the way, so Portuguese is my mother language.
				</p>
				<p className="mb-3">
					In my free time, I like going outside, trying new
					activities, and starting personal projects from scratch to
					stay up-to-date with new technologies. I&apos;ve also
					created a{' '}
					<a
						className="text-primary-500 hover:underline"
						href="https://www.udemy.com/course/lumen-micro-framework/"
						target="_blank"
						rel="noreferrer"
					>
						course at Udemy
					</a>
					. More than 300 people have enrolled so far.
				</p>
				<p className="mb-3">
					I get excited about opportunities where{' '}
					<span className="font-semibold text-white">
						I&apos;m able to learn new tools, face problems, and
						deliver real impact to business needs.
					</span>
				</p>
				<p>
					Would you like to know a little about how I work? There are
					some information in those pages{' '}
					<CustomLink to="skills">Skills</CustomLink> and{' '}
					<CustomLink to="projects">Projects</CustomLink>.
				</p>
			</div>
			<SectionHeader className="mt-10">Main Skills</SectionHeader>
			<div className="flex flex-wrap gap-2 mb-4">
				<img
					className="h-8"
					alt="JavaScript"
					src="https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript&color=1f2937"
				/>
				<img
					className="h-8"
					alt="React"
					src="https://img.shields.io/badge/-React-000?&logo=React&color=1f2937"
				/>
				<img
					className="h-8"
					alt="Node"
					src="https://img.shields.io/badge/-Node.js-000?&logo=node.js&color=1f2937"
				/>
			</div>
			<p className="text-gray-400 max-w-3xl">
				Those are the primary skills I use on projects, but I have a
				whole set of skills I acquired over the years.{' '}
				<CustomLink to="skills">Let&apos;s check them out</CustomLink>.
			</p>
		</>
	);
};

export default HomePage;
