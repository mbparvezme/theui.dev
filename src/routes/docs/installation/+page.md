---
title: theui-svelte Installation guide
dir: docs
description: Follow our step-by-step guide to install TheUI-Svelte component library. Get started with easy installation instructions for seamless integration.
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte";
  import Head from "$lib/ui/doc/Head.svelte";
  import Block from "$lib/ui/doc/Block.svelte";
  import Code from "$lib/ui/doc/Code.svelte";
  export let data: PageData;
</script>

<DocContainer setupLink={false}>
  <Head title="Installation" text="Install the <b>theui-svelte</b> component library in your project or start a new project with the boilerplate template. Install it to build fast and deliver faster." edit_url={data.edit_url} />

  <Block title="Installation">
    <div>
      <p class="not-prose">Follow one of the two methods to install the component library:</p>
      <ol class="mb-0">
        <li class="my-0">Github boilerplate.</li>
        <li class="my-0">Manually installation.</li>
      </ol>
    </div>
  </Block>

  <Block title="1. Use Github Boilerplate" id="boilerplate">
    <p class="not-prose">Open your terminal and run the following commands to install the boilerplate template. Replace <code>project-name</code> with your desired project name.</p>
<Code title="Clone from Github">

```bash
# Clone the project
git clone https://github.com/mbparvezme/theui-svelte-boilerplate.git project-name
# Navigate to the project directory
cd project-name
# Install node modules
npm install
# Run the application
npm run dev
```
</Code>
  </Block>

  <Block title="2. Manual Installation" id="manualFromScratch">
    <p class="not-prose font-semibold">2.1 Install SvelteKit <span class="font-body mt-0 pl-2 text-sm italic">(Skip this step if you have already installed)</span>.</p>
<Code title="Install SvelteKit">

```bash
npx sv create my-app
cd my-app
npm i
```
</Code>

<p class="not-prose font-semibold">2.2 Install TailwindCSS and configure it.</p>

<Code title="Install TailwindCSS">

<!-- npx svelte-add@latest tailwindcss -->
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
</Code>

<blockquote class="text-gray-500 mt-0">For further installation and configuration guide, read the <a href="https://tailwindcss.com/docs/guides/sveltekit" target="_blank" class="underline underline-offset-4 text-gray-500">official TailwindCSS installation guide</a> for SvelteKit!</blockquote>

<p class="not-prose font-semibold">2.3 Install "theui-svelte" component library</p>
<Code title="Install theui-svelte">

```bash
npm i theui-sveltekit
```
</Code>
    <p class="font-semibold mb-0">2. Configure</p>
    <p class="not-prose">Open <b>tailwind.config.cjs</b> and replace the content with the following code block:</p>
<Code title="Modify tailwind.config.cjs">

```js
// 1. Update config.content
// 2. Add config.presets
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/theui-sveltekit/**/*.{html,js,svelte,ts}", // New line
  ],
  presets: [require("theui-sveltekit/preset")], // New line
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = config;
```
</Code>
    <p class="not-prose">Open <b>+layout.svelte</b> and import the core style file <code>style.postcss</code> inside the <code>&lt;script&gt;</code> tag. It is required for the custom color classes to work properly.</p>
<Code title="Modify +layout.svelte">

```html
<script>
  import "theui-sveltekit/style"; // Add this line inside script tag
  import "../app.postcss";
</script>
```
</Code>
    <p class="not-prose">And thats all. You are all set and ready to start your awesome project now. Now run your application with the following command:</p>

<Code title="Run project">

```sh
npm run dev
```
</Code>
  </Block>

  <svelte:fragment slot="sidebar">
    <a href="#boilerplate">Boilerplate installation</a>
    <a href="#manualFromScratch">Install from Scratch</a>
  </svelte:fragment>

</DocContainer>