<script lang="ts">
  import type { Snippet } from "svelte";
  import Code from "./CodeBlock.svelte";
  import { twMerge } from "tailwind-merge";
  import { processID } from "$lib";

  interface Props {
    children?: Snippet,
    example?: Snippet,
    code?: Snippet,
    children2?: Snippet,
    example2?: Snippet,
    code2?: Snippet,
    classes?: string,
    title?: string,
    codeTitle?: string,
    code2Title?: string,
    mt?: boolean
  };

  let {children, children2, example, example2, code, code2, classes, title, codeTitle, code2Title, mt = true}: Props = $props();
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

  {@render children2?.()}

  {#if example2 || code2}
    <div class="rounded-md mt-4 border border-gray-200 dark:border-gray-800">

      {#if example2}
      <div class="not-prose {twMerge("p-5 flex justify-center items-center gap-4 rounded-md bg-white dark:bg-black/40", classes)}">
        {@render example2()}
      </div>
      {/if}

      {#if code2}
      <Code classes="border-0" space="none" title={codeTitle}>
        {@render code2()}
      </Code>
      {/if}

    </div>
  {/if}
</div>

<style lang="postcss">
  @reference "../../../app.css";
:global(.example-section + .example-section){
  @apply mt-8;
}
</style>