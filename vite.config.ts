import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
// import { fileURLToPath, URL } from 'node:url';
import adapter from '@sveltejs/adapter-cloudflare'
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const lib = fileURLToPath(new URL('../theui-svelte/dist', import.meta.url));

export default defineConfig({
	plugins: [tailwindcss(), sveltekit({
		preprocess: [mdsvex(), vitePreprocess()],
		adapter: adapter(),
		extensions: ['.svelte', '.svx']
	}
	)],
	// resolve: {
	// 	alias: [
	// 		{ find: /^theui-svelte\/type$/, replacement: `${lib}/types.js` },
	// 		{ find: /^theui-svelte\/function$/, replacement: `${lib}/function.js` },
	// 		{ find: /^theui-svelte\/style\.css$/, replacement: `${lib}/style.css` },
	// 		{ find: /^theui-svelte\/style$/, replacement: `${lib}/style.css` },
	// 		{ find: /^theui-svelte$/, replacement: `${lib}/index.js` }
	// 	]
	// }
});
