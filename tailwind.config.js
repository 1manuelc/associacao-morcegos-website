/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#fff6ed',
					100: '#ffecd5',
					200: '#ffd4a9',
					300: '#feb673',
					400: '#fd8a37',
					500: '#fb6c14',
					600: '#ec500a',
					700: '#c43a0a',
					800: '#9b2f11',
					900: '#7d2911',
					950: '#441206',
				},
			},
		},
	},
	plugins: [],
};
