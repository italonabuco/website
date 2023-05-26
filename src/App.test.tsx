import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders Title', () => {
	render(<App />);
	const title = screen.getByText('Italo Nabuco', { exact: false });
	expect(title).toBeInTheDocument();
});
