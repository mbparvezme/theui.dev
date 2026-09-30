// mdsvex turns every .svx page into a component plus the frontmatter of that page.
// This file has no imports or exports of its own, so the declaration stays ambient.
declare module '*.svx' {
	const page: import('svelte').Component<Record<string, unknown>>;

	export const metadata: {
		title?: string;
		category?: string;
		description?: string;
		dir?: string;
		tags?: string[];
		[key: string]: unknown;
	};

	export default page;
}
