---
title: theui-svelte Installation guide
dir: docs
description: Follow our step-by-step guide to install TheUI-Svelte component library. Get started with easy installation instructions for seamless integration.
---

<script lang="ts">
  import DocContainer from "$lib/ui/doc/Container.svelte";
  import Head from "$lib/ui/doc/Head.svelte";
  import Block from "$lib/ui/doc/Block.svelte";
  import Code from "$lib/ui/doc/Code.svelte";
</script>

<DocContainer setupLink={false}> 
  <Head title="Installation" text="Install the SvelteKit Components library in your project or start a new project with the boilerplate template. Install it to build fast and deliver faster."/>

  <Block title="Installation">
    <p>Follow one of the two methods to install the component library:</p>
    <ol>
      <li>Use the boilerplate from Github.</li>
      <li>Manually install the component library from scratch.</li>
    </ol>
  </Block>

  <Block title="1. Use Boilerplate From Github" id="boilerplate">
    <p class="m-0 not-prose">Open your terminal and run the following commands to install the boilerplate template. Replace <code>project-name</code> with your desired project name.</p>
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

  <Block title="2. Install Manually From Scratch" id="manualFromScratch">
    <p class="not-prose">To install the component library manually, follow the steps below.</p>
    <p class="font-semibold">2.1 Install Svelte or Svelte Kit <span class="font-body mt-0 pl-2 text-sm italic">(Skip this step if you have already installed Sveltekit)</span></p>
<Code title="Install SvelteKit">

```bash
npm create svelte@latest my-app
cd my-app
```
</Code>

<p>Add Tailwind CSS to the application:</p>

<Code title="Install TailwindCSS">

<!-- npx svelte-add@latest tailwindcss -->
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
</Code>
<p>Install node modules:</p>
<Code title="Install NPM modules">

```bash
npm install
```
</Code>
<p>Install TheUI Sveltekit Component:</p>
<Code title="Install theui-svelte">

```bash
npm i theui-sveltekit
```
</Code>
    <p class="font-semibold">2.2 Configure</p>
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
    <p>And thats all. You are all set and ready to start your awesome project now. Now run your application with the following command:</p>

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