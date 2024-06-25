<script lang="ts">
  import type { PageData } from './$types';
  import { page } from "$app/stores";
  import { Button, Container, Svg, Drawer } from "theui-svelte";
  import SidebarIcon from "$lib/icon/SidebarIcon.svelte";

  let currPage;
  $: currPage = $page?.url.pathname;
  export let data: PageData;
  let componentGroupIconColor: Array<string> = ["fill-green-600", "fill-violet-500", "fill-blue-500", "fill-brand"];
</script>

<div class="fixed right-8 bottom-8 lg:hidden">
  <Drawer id="docSidebar">
    <Button label="" size="sm" rounded="full" class="h-12 w-12 flex items-center justify-center bg-brand border-brand/50">
      <Svg slot="label" size={1.5} viewBox="0 0 16 16" class="fill-white">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      </Svg>
    </Button>
  </Drawer>
</div>

<Drawer id="docSidebar">
  <div slot="drawerContent" class="flex flex-col h-full overflow-y-auto pb-16">
    {#each data.components as components, i}
    <section>
      <h3 class="font-bold mb-4 flex gap-3 items-center">
        <Svg class={componentGroupIconColor[i]}>
          {@html components.icon}
        </Svg>
        {components.section_title}
      </h3>
      <nav class="sidebar-link dark:font-light">
        {#each components.links as component}
          <a class:active={currPage==component.link} href={component.link}>{component.text}</a>
        {/each}
      </nav>
    </section>
    {/each}
  </div>
</Drawer>

<Container class="relative">
  <section class="grid lg:grid-cols-5 min-h-screen px-8 2xl:px-0 pb-24">
    <aside class="doc-sidebar pt-8 top-24 fixed lg:sticky lg:w-auto bg-primary lg:bg-transparent -translate-x-[288px] lg:translate-x-0" style="height: calc(100vh - 64px)">
      <div class="flex flex-col h-full overflow-y-auto pb-16">
        {#each data.components as components, i}
        <section>
          <h3 class="font-bold mb-4 flex gap-3 items-center">
            <SidebarIcon class={componentGroupIconColor[i]} title={components.section_title} />
            {components.section_title}
          </h3>
          <nav class="sidebar-link dark:font-light">
            {#each components.links as component}
              <a class:active={currPage==component.link} href={component.link}>{component.text}</a>
            {/each}
          </nav>
        </section>
        {/each}
      </div>
    </aside>
    <div class="docs lg:col-span-4 min-h-screen lg:pl-8 pt-6 max-w-full prose dark:prose-invert dark:prose-h1:text-default dark:prose-h2:text-default dark:prose-h3:text-default dark:prose-h4:text-gray-500 prose-pre:whitespace-pre-wrap relative">
      <slot />
    </div>
  </section>
</Container>

<style lang="postcss">
  .sidebar-link{
    @apply flex-grow flex flex-col text-sm font-medium  mb-8 border-l border-gray-300;
  }
  .sidebar-link a{
    @apply border-l border-black pl-4 -ml-px py-1 border-opacity-10 inline text-gray-900 dark:text-gray-200 dark:hover:border-white/50 hover:border-black/50;
  }
  .sidebar-link a.active{
    @apply border-brand-500 text-brand-500;
  }
</style>