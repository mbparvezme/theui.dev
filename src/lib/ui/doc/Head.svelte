<script lang="ts">
  import { Button } from "theui-svelte";
  export let title  : string|undefined;
  export let text : string|undefined;
  export let edit_url : string|undefined = undefined;
</script>

<header class="mb-8 border-b dark:border-gray-900 pb-4">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-2xl font-semibold" class:mb-2={text} class:mb-0={!text}>{@html title}</h1>
    {#if edit_url}<Button label="Edit page" variant="text" href={edit_url} class="text-gray-500 text-sm" target="_blank" />{/if}
  </div>
  {#if text}<p class="font-medium mb-0 not-prose text-gray-500">{@html text}</p>{/if}
  <slot />
</header>
