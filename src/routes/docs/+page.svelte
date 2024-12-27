<script lang="ts">
  import type { PageData } from "../$types";

  import DocLayout from "$lib/ui/doc/DocLayout.svelte";
  import DocHead from "$lib/ui/doc/Head.svelte";
  import DocBlock from "$lib/ui/doc/Block.svelte";
  let { data }: {data: PageData } = $props();
</script>

<DocLayout>

  <DocHead title="theui-svelte: Svelte 5 Component Library" text="Kickstart your development with the theui-svelte, a comprehensive component library designed for the Svelte ecosystem. Leveraging the power of Svelte and TailwindCSS, the theui-svelte accelerates your development process, helping you build and deliver projects faster." />

  <DocBlock title="Introduction">
    <p class="not-prose">Welcome to the <b>theui-svelte</b>, the component library for Svelte by TheUI, built on top of TailwindCSS. Our components are designed to be highly accessible and customizable out of the box. By combining the capabilities of Svelte with the versatile features of TailwindCSS, the <b>theui-svelte</b> offers a powerful tool-set to enhance your development workflow.</p>
  </DocBlock>

  <DocBlock title="Features">
    <div>
      <p class="not-prose">The main features of the component library are:</p>
      <ul>
        <li>Built with ARIA roles and WCAG compliance for better usability.</li>
        <li>Highly customizable</li>
        <li>Support LTR/RTL.</li>
        <li>Easy theming, branding, and dark/light mode control.</li>
        <li>Optimized for leveraging svelte's reactivity</li>
        <li>Includes smooth transitions and animations for better user experience.</li>
        <li>Fully typed for enhanced development</li>
        <li>Offers examples, and usage guides tailored for Svelte.</li>
      </ul>
    </div>
  </DocBlock>

  <DocBlock title="Components">
    <h4 class="mb-0">UI COMPONENTS</h4>
    <div class="grid grid-cols-3">
      {#each data.components.components.links as component}
        <a class="not-prose" href={component.link}>{component.text}</a>
      {/each}
    </div>
    <h4 class="mb-0">FORM ELEMENTS</h4>
    <div class="grid grid-cols-3">
      {#each data.components.forms.links as component}
        <a class="not-prose" href={component.link}>{component.text}</a>
      {/each}
    </div>
    <h4 class="mb-0">UTILITIES</h4>
    <div class="grid grid-cols-3">
      {#each data.components.utilities.links as component}
        <a class="not-prose" href={component.link}>{component.text}</a>
      {/each}
    </div>
  </DocBlock>

  {#snippet sidebar()}
    This is sidebar!
  {/snippet}

</DocLayout>