---
title: TheUI Svelte Introduction
dir: docs
description: Begin your journey with TheUI-Svelte. Learn how to quickly set up and integrate TheUI-Svelte component library into your Svelte projects.
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte"
  import Head from "$lib/ui/doc/Head.svelte"
  import Block from '$lib/ui/doc/Block.svelte'

  export let data: PageData;

  let links: Array<{string: string}> = []
  data.components.forEach((section, i) => {
    if(i > 0) section.links.forEach(link => links.push(link));
  });
</script>

<DocContainer setupLink={false}> 
  <Head title="Theui-Svelte: Component Library for Svelte" text="Kickstart your development with the <b>theui-svelte</b>, a comprehensive component library designed for the Svelte ecosystem. Leveraging the power of Svelte and TailwindCSS, the <b>theui-svelte</b> accelerates your development process, helping you build and deliver projects faster." edit_url={data.edit_url}/>

  <Block title="Introduction">
    <p>Welcome to the <b>theui-svelte</b>, the component library for Svelte by TheUI, built on top of TailwindCSS. Our components are designed to be highly accessible and customizable out of the box. By combining the capabilities of Svelte with the versatile features of TailwindCSS, the <b>theui-svelte</b> offers a powerful tool-set to enhance your development workflow.</p>
  </Block>

  <Block title="Features">
    <div>
      <p class="not-prose">The main features of the component library are:</p>
      <ul>
        <li><strong>Accessible components:</strong> Designed with accessibility in mind to ensure inclusivity.</li>
        <li><strong>Dark/light mode support:</strong> Easily switch between themes.</li>
        <li><strong>Theming and branding:</strong> Customize with a single line of CSS.</li>
        <li><strong>Highly customizable:</strong> Tailor components to fit your needs.</li>
        <li><strong>RTL support:</strong> (Coming soon) Right-to-left language support.</li>
        <li><strong>Fully typed:</strong> TypeScript support for a robust development experience.</li>
      </ul>
    </div>
  </Block>

  <Block title="Available Components" id="components">
    <div>
      <p>This library includes {links.length} components and still counting. The components are given below:</p>
      <ul class="grid grid-cols-3">
        {#each links as component}
        <li><a href={component.link}>{component.text}</a></li>
        {/each}
      </ul>
    </div>
  </Block>

  <svelte:fragment slot="sidebar">
    <a href="#introduction">Introduction</a>
    <a href="#features">Features</a>
    <a href="#components">Components</a>
  </svelte:fragment>

</DocContainer>