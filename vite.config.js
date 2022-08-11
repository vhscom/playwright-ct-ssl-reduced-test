import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

const plugins = [sveltekit()];
if (!process.env.RUNNING_UNDER_PLAYWRIGHT_TEST) plugins.unshift(basicSsl());

/** @type {import('vite').UserConfig} */
const config = {
	define: {
		global: 'globalThis'
	},
	preview: {
		https: !process.env.RUNNING_UNDER_PLAYWRIGHT_TEST
	},
	plugins
};

export default config;
