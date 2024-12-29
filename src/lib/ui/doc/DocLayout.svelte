<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet,
    sidebar?: Snippet,
    setupLink?: boolean,
    title?: string,
  }
  let {children, sidebar, setupLink = true }: Props = $props()
</script>

<section class="grid gap-8" class:lg:grid-cols-5={sidebar}>

  <article class="lg:col-span-4 line-numbers">
    {@render children?.()}
    <p class="bg-red-500">END MESSAGE</p>
  </article>

  {#if sidebar}
  <aside class="shrink-0 hidden lg:block overflow-y-auto top-28 lg:sticky" style="height: calc(100vh - 160px)">
    <div class="flex flex-col gap-y-2 text-sm page-section">
      <h6 class="mt-0 flex justify-between items-center">
        <span class="font-bold text-xs">ON THIS PAGE</span>
        <a class="text-[9px]" href="#">Top &uparrow;</a>
      </h6>
      {#if setupLink}
      <a href="#setup">Setup</a>
      {/if}
      <!-- <Button size="xs" href="#" class="ms-auto no-underline bg-transparent shadow-none flex hover:bg-transparent gap-2 text-default opacity-40 hover:opacity-100 transition-opacity duration-300">
        To top &uparrow;
      </Button> -->
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