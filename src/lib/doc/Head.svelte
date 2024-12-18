<script lang="ts">
  import type { Snippet } from "svelte";
  import { Button } from "theui-svelte-test";

  interface Props {children?: Snippet, title?: string, text?: string, edit_url?: string};
  let {children, title, text, edit_url}: Props = $props();
</script>

<header class="mb-8 border-b dark:border-gray-900 pb-4">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-2xl font-semibold" class:mb-2={text} class:mb-0={!text}>{@html title}</h1>
    {#if edit_url}<Button label="Edit this page" size="sm" href={edit_url} class="no-underline text-gray-500 bg-transparent shadow-none flex hover:bg-transparent gap-2" target="_blank" />{/if}
  </div>
  {#if text}<p class="font-medium mb-0 not-prose text-gray-500">{@html text}</p>{/if}
  {@render children?.()}
</header>