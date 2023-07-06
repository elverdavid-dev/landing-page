/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				inter:"'Inter', sans-serif",
				poppins:"'Poppins', sans-serif"
			},
			colors:{
				primary:"#20B15A",
				second:"#F55F1D"
			}
		},
	},
	plugins: [],
}
