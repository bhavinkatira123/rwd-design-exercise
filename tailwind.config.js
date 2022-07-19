/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				auto: 'repeat(auto-fill, minmax(460px, 1fr))',
				tablet_responsive: 'repeat(auto-fill, minmax(360px, 1fr))',
				mobile_responsive: 'repeat(auto-fill, minmax(290px, 1fr))',
			},
			borderRadius: {
				image_radius: '10px 10px 0 0',
				tablet_image_radius: '8px 8px 0 0',
				mobile_image_radius: '4px 4px 0 0',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
