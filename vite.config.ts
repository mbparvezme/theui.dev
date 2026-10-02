import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import adapter from '@sveltejs/adapter-cloudflare'
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// While the next version of the library is in development, the docs run against
// the local build (dist) instead of the published package. Remove these aliases once
// the matching theui-svelte version is on npm.
const lib = fileURLToPath(new URL('../theui-svelte/dist', import.meta.url));

export default defineConfig({
	plugins: [tailwindcss(), sveltekit({
		preprocess: [mdsvex(), vitePreprocess()],
		adapter: adapter(),
		extensions: ['.svelte', '.svx'],
		alias: { '$lib': 'src/lib' }
	}
	)],
	resolve: {
		alias: [
			{ find: /^theui-svelte\/type$/, replacement: `${lib}/types.js` },
			{ find: /^theui-svelte\/function$/, replacement: `${lib}/function.js` },
			{ find: /^theui-svelte\/style\.css$/, replacement: `${lib}/style.css` },
			{ find: /^theui-svelte\/style$/, replacement: `${lib}/style.css` },
			{ find: /^theui-svelte$/, replacement: `${lib}/index.js` }
		]
	}
});
