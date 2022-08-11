import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

/** @type {import('vite').UserConfig} */
const config = {
	define: {
		global: 'globalThis'
	},
	preview: {
		https: true
	},
	plugins: [basicSsl(), sveltekit()]
};

export default config;
