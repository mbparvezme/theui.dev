import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".svelte", ".md", ".svx"],
  smartypants: {
    dashes: "oldschool",
  },
  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;