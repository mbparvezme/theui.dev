<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet,
    sidebar?: Snippet,
    title?: string,
  }
  let {children, sidebar}: Props = $props()
</script>

<section class="w-full flex gap-8">
  <article class="grow line-numbers w-full lg:w-[calc(100%_-_16rem)] prose max-w-full dark:prose-invert dark:prose-h1:text-default dark:prose-h2:text-default dark:prose-h3:text-default dark:prose-h4:text-gray-500 prose-pre:whitespace-pre-wrap">
    {@render children?.()}
    <!-- <p class="bg-red-500">END MESSAGE</p> -->
  </article>

  {#if sidebar}
  <aside class="shrink-0 hidden lg:block overflow-y-auto top-28 lg:sticky h-[calc(100vh_-_160px)] w-56">
    <div class="page-section text-sm">
      <h6 class="mt-0 flex justify-between items-center mb-4">
        <span class="font-bold text-xs">ON THIS PAGE</span>
        <a class="text-xs no-underline" href="#">Top &uparrow;</a>
      </h6>
      <div class="not-prose flex flex-col gap-y-2">
        {@render sidebar()}
      </div>
    </div>
  </aside>
  {/if}
</section>

<style>
  @reference "../../../app.css";
  :global(.page-section.not-prose a){
    @apply text-gray-500 dark:text-gray-200 no-underline;
  }
</style>