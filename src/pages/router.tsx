import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './HomePage';
import ComingSoonPage from './ComingSoonPage';
import NotFoundPage from './NotFoundPage';
import SkillsPage from './SkillsPage';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route errorElement={<NotFoundPage />}>
				<Route index element={<HomePage />} />
				<Route path="skills" element={<SkillsPage />} />
				<Route path="projects" element={<ComingSoonPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Route>
	)
);
