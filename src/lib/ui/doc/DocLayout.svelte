<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet,
    sidebar?: Snippet,
    setupLink?: boolean,
    title?: string,
  }
  let {children, sidebar, setupLink = true, title}: Props = $props()
</script>

<section class="grid gap-8" class:lg:grid-cols-5={sidebar}>

  <article class="lg:col-span-4 line-numbers">
    {@render children?.()}
    <p class="bg-red-500">END MESSAGE</p>
  </article>

  {#if sidebar}
  <aside class="shrink-0 hidden lg:block overflow-y-auto top-32 lg:sticky" style="height: calc(100vh - 160px)">
    <div class="flex flex-col gap-y-2 text-sm page-section">
      <h4 class="mt-0">ON THIS PAGE</h4>
      {#if setupLink}
      <a href="#setup">Setup</a>
      {/if}
      {@render sidebar()}
    </div>
  </aside>
  {/if}

</section>

<style lang="postcss">
  :global(.page-section a){
    @apply text-gray-500 no-underline;
  }
</style>