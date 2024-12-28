<script lang="ts">
  import type { Snippet } from "svelte";
  import { Button } from "theui-svelte";

  interface Props {children?: Snippet, title?: string, text?: string, edit_url?: string};
  let {children, title, text, edit_url}: Props = $props();
</script>

<header class="mb-8 pb-4 border-b dark:border-gray-900">
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bolder" class:mb-2={text} class:mb-0={!text}>{@html title}</h1>
    {#if edit_url}<Button label="Edit this page" size="xs" href={edit_url} class="no-underline text-muted bg-transparent shadow-none flex hover:bg-transparent gap-2" target="_blank" />{/if}
  </div>
  {#if text}<p class="font-normal text-lg mb-0 not-prose text-muted">{@html text}</p>{/if}
  {@render children?.()}
</header>