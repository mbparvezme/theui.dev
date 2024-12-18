<script lang="ts">
  import type { Snippet } from "svelte";
  import Code from "./CodeBlock.svelte";

  interface Props {
    children?: Snippet,
    example?: Snippet,
    code?: Snippet,
    title?: string,
    codeTitle?: string,
  };

  let {children, example, code, title, codeTitle = ""}: Props = $props();
</script>

{#if title}
  <h4 class="font-semibold font-body text-gray-500 mb-0 mt-4">{@html title}</h4>
{/if}

{@render children?.()}

<div class="rounded-md bg-secondary dark:bg-black/50">

  {#if example}
  <div class="p-4 not-prose">
    {@render example()}
  </div>
  {/if}

  {#if code}
  <Code space="none" title={codeTitle}>
    {@render code()}
  </Code>
  {/if}

</div>