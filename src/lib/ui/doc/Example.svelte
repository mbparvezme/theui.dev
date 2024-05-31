<script lang="ts">
  import Code from "./Code.svelte"
  export let title: string|undefined = undefined
  export let codeTitle: string|undefined = undefined
</script>

{#if title}
  <h4 class="font-semibold font-body text-gray-500 mb-2">{title}</h4>
{/if}
<slot />
<div class="mb-4 rounded-md border dark:border-gray-900 bg-secondary dark:bg-tertiary">
  {#if $$slots?.example}
  <div class="p-4 not-prose">
    <slot name="example"/>
  </div>
  {/if}
  {#if $$slots?.code}
  <Code space="none" title={codeTitle}>
    <slot name="code"/>
  </Code>
  {/if}
</div>