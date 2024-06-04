<script lang="ts">
  export let title  : string|undefined
  export let text   : string|undefined
</script>

<header class="mb-8 border-b dark:border-gray-900 pb-4">
  {#if title}<h1 class="text-2xl font-semibold" class:mb-2={text} class:mb-0={!text}>{@html title}</h1>{/if}
  {#if text}<p class="font-medium mb-0 not-prose text-gray-500">{@html text}</p>{/if}
  <slot />
</header>
