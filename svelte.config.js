import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	extensions: mdsvexConfig.extensions,
	preprocess: [
		mdsvex(mdsvexConfig),
		vitePreprocess()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
