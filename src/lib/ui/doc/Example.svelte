<script lang="ts">
  import type { Snippet } from "svelte";
  import Code from "./CodeBlock.svelte";
    import { twMerge } from "tailwind-merge";

  interface Props {
    children?: Snippet,
    example?: Snippet,
    code?: Snippet,
    classes?: string,
    title?: string,
    codeTitle?: string,
  };

  let {children, example, code, classes, title, codeTitle}: Props = $props();
</script>

<div>
  {#if title}
    <h4 class="font-semibold font-body text-muted mt-0 mb-1">{@html title}</h4>
  {/if}

  {@render children?.()}

  <div class="rounded-md bg-secondary dark:bg-black/50 mt-4 border border-gray-300 dark:border-gray-800">

    {#if example}
    <div class="not-prose text-center { twMerge("p-4 flex justify-center items-center gap-4", classes)}">
      {@render example()}
    </div>
    {/if}

    {#if code}
    <Code classes="border-0" space="none" title={codeTitle}>
      {@render code()}
    </Code>
    {/if}

  </div>
</div>