<script lang="ts">
  import type { Snippet } from 'svelte';
  import { page } from "$app/state";
  import { Container, Svg, Drawer } from "theui-svelte";
  import { twMerge } from 'tailwind-merge';

  let { children, data }: {children: Snippet, data: any } = $props();
  let linkClasses = (active: boolean = false) => twMerge("border-s-2 border-gray-500/10 ps-4 py-1 inline text-default tracking-wide font-normal", active && "border-brand-primary-500 text-brand-primary-500 dark:border-brand-primary-300 dark:text-brand-primary-300");
</script>

<!-- <div class="fixed right-8 bottom-8 lg:hidden">
  <Drawer id="docSidebar" buttonClasses="cursor-pointer z-40">
  </Drawer>
</div> -->

<!-- <Drawer id="docSidebar">
  {#snippet label()}
  <Svg size={1.5} viewBox="0 0 16 16" class="fill-white">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </Svg>
  {/snippet}
  <div class="flex flex-col h-full overflow-y-auto pb-16">
    <section>
      <h3 class="font-semibold mb-4 flex gap-3 items-center">
        <Svg class="fill-green-600" title="Getting Started">
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
        </Svg>
        Getting Started
      </h3>
      <nav class="sidebar-link flex-grow flex flex-col text-sm mb-8 border-l border-gray-300 dark:font-light">
        {#each data.components.intro.links as component}
          <a class={linkClasses(page.url.pathname==component.link)} href={component.link}>{@html component.text}</a>
        {/each}
      </nav>
    </section>

    <section>
      <h3 class="font-semibold mb-4 flex gap-3 items-center">
        <Svg class="fill-violet-600" title="Components">
          <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z"/><path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z"/>
        </Svg>
        Components
      </h3>
      <nav class="sidebar-link flex-grow flex flex-col text-sm mb-8 border-l border-gray-300 dark:font-light">
        {#each data.components.components.links as component}
          <a class={linkClasses(page.url.pathname==component.link)} href={component.link}>{@html component.text}</a>
        {/each}
      </nav>
    </section>

    <section>
      <h3 class="font-semibold mb-4 flex gap-3 items-center">
        <Svg class="fill-blue-600" title="Forms">
          <path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/><path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13A.5.5 0 0 1 8 1"/>
        </Svg>
        Forms
      </h3>
      <nav class="sidebar-link flex-grow flex flex-col text-sm mb-8 border-l border-gray-300 dark:font-light">
        {#each data.components.forms.links as component}
          <a class={linkClasses(page.url.pathname==component.link)} href={component.link}>{@html component.text}</a>
        {/each}
      </nav>
    </section>

    <section>
      <h3 class="font-semibold mb-4 flex gap-3 items-center">
        <Svg class="fill-rose-600" title="Utilities">
          <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.08 2.08 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.92 1.92 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0M5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4z"/>
        </Svg>
        Utilities
      </h3>
      <nav class="sidebar-link flex-grow flex flex-col text-sm mb-8 border-l border-gray-300 dark:font-light">
        {#each data.components.utilities.links as component}
          <a class={linkClasses(page.url.pathname==component.link)} href={component.link}>{@html component.text}</a>
        {/each}
      </nav>
    </section>
  </div>
</Drawer> -->

<Container class="relative flex gap-8 min-h-screen pb-48 pt-28">
  <aside class="doc-sidebar top-28 fixed md:sticky bg-primary md:bg-transparent hidden md:block w-64 md:w-48 lg:w-64 shrink-0">
    <div class="flex flex-col h-full overflow-y-auto pb-16">

      <section>
        <h3 class="font-semibold mb-4 flex gap-3 items-center">
          <Svg class="fill-green-600" title="Getting Started">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </Svg>
          Getting Started
        </h3>
        <nav class="sidebar-link flex-grow flex flex-col text-sm mb-8 dark:font-light">
          {#each data.components.intro.links as component}
            <a class={linkClasses(page.url.pathname==component.link)} href={component.link}>{@html component.text}</a>
          {/each}
        </nav>
      </section>

      <section>
        <h3 class="font-semibold mb-4 flex gap-3 items-center">
          <Svg class="fill-violet-600" title="Components">
            <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z"/><path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z"/>
          </Svg>
          Components
        </h3>
        <nav class="sidebar-link flex-grow flex flex-col text-sm mb-8 dark:font-light">
          {#each data.components.components.links as component}
            <a class={linkClasses(page.url.pathname==component.link)} href={component.link}>{@html component.text}</a>
          {/each}
        </nav>
      </section>

      <section>
        <h3 class="font-semibold mb-4 flex gap-3 items-center">
          <Svg class="fill-blue-600" title="Forms">
            <path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/><path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13A.5.5 0 0 1 8 1"/>
          </Svg>
          Forms
        </h3>
        <nav class="sidebar-link flex-grow flex flex-col text-sm mb-8 dark:font-light">
          {#each data.components.forms.links as component}
            <a class={linkClasses(page.url.pathname==component.link)} href={component.link}>{@html component.text}</a>
          {/each}
        </nav>
      </section>

      <section>
        <h3 class="font-semibold mb-4 flex gap-3 items-center">
          <Svg class="fill-rose-600" title="Utilities">
            <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.08 2.08 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.92 1.92 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0M5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4z"/>
          </Svg>
          Utilities
        </h3>
        <nav class="sidebar-link flex-grow flex flex-col text-sm mb-8 dark:font-light">
          {#each data.components.utilities.links as component}
            <a class={linkClasses(page.url.pathname==component.link)} href={component.link}>{@html component.text}</a>
          {/each}
        </nav>
      </section>

    </div>
  </aside>
  <div class="docs min-h-screen grow relative w-full md:max-w-[calc(100%_-_14rem)] lg:max-w-[calc(100%_-_18rem)]">
    {@render children()}
  </div>
</Container>