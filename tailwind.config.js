/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Inter', 'Roboto Mono', 'Menlo', 'monospace'],
				body: ['Inter', 'Roboto Mono', 'Menlo', 'monospace'],
			},
			boxShadow: {
				card: '0 0 6px rgba(0, 0, 0, 0.15)',
			},
			colors: {
				// palette list: https://tailwindcss.com/docs/customizing-colors
				primary: {
					500: '#00FF00',
					600: '#00E600',
					700: '#00BF00',
					800: '#008000',
				},
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
		},
	},
	plugins: [],
};
