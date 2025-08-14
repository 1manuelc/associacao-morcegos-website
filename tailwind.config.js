/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Light theme colors
				primary: {
					50: '#fdf6ef',
					100: '#fbead9',
					200: '#f7d1b1',
					300: '#efa56b',
					400: '#eb894c',
					500: '#e66929',
					600: '#d7511f',
					700: '#b23d1c',
					800: '#8e321e',
					900: '#732b1b',
					950: '#3e130c',
				},
				accent: {
					50: '#F7F9FE',
					100: '#DFE9FA',
					200: '#A8C6F2',
					300: '#66A4EB',
					400: '#4381C1',
					500: '#366BA1',
					600: '#2A5581',
					700: '#1E3F62',
					800: '#142D48',
					900: '#091A2D',
					950: '#040F1C',
				},
			},
		},
	},
	plugins: [],
};
