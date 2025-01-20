<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet,
    sidebar?: Snippet,
    title?: string,
  }
  let {children, sidebar}: Props = $props()
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
        <a class="text-xs" href="#">Top &uparrow;</a>
      </h6>
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