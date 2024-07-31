/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-red': '#F20505',
				'neutral-white': '#EDF2E9 ',
				'neutral-black': '#0D0D0D',
				'secundary-purple': '#A732D9',
				'secundary-green': '#14D959',
			}
		},
	},
	plugins: [],
}
