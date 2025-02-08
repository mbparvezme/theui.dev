<script lang="ts">
  import type { Snippet } from "svelte";
  import Code from "./CodeBlock.svelte";
  import { twMerge } from "tailwind-merge";
  import { processID } from "$lib";

  interface Props {
    children?: Snippet,
    example?: Snippet,
    code?: Snippet,
    classes?: string,
    title?: string,
    codeTitle?: string,
    mt?: boolean
  };

  let {children, example, code, classes, title, codeTitle, mt = true}: Props = $props();
</script>

<div class="example-section" class:!mt-0={!mt}>
  {#if title}
    <h4 id={processID(title, false)} class="not-prose text-xl font-semibold font-body text-gray-700 dark:text-gray-400 mt-0 mb-2">{@html title}</h4>
  {/if}

  {@render children?.()}

  {#if example || code}
    <div class="rounded-md mt-4 border border-gray-200 dark:border-gray-800">

      {#if example}
      <div class="not-prose {twMerge("p-5 flex justify-center items-center gap-4 rounded-md bg-white dark:bg-black/40", classes)}">
        {@render example()}
      </div>
      {/if}

      {#if code}
      <Code classes="border-0" space="none" title={codeTitle}>
        {@render code()}
      </Code>
      {/if}

    </div>
  {/if}
</div>

<style lang="postcss">
:global(.example-section + .example-section){
  @apply mt-12;
}
</style>