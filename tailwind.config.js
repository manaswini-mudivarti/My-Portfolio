/* eslint‑env node */
/* eslint‑disable @typescript-eslint/no-var-requires */

module.exports = {
	darkMode: 'class', // enable class‑based dark mode
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Playfair Display', 'serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'), // beautiful prose defaults
	],
};
