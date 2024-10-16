<script lang="ts">
  import Code from "./Code.svelte"
  export let title: string|undefined = undefined
  export let codeTitle: string|undefined = undefined
</script>

{#if title}
  <h4 class="font-semibold font-body text-gray-500 mb-0 mt-4">{title}</h4>
{/if}
<slot />
<div class="rounded-md bg-secondary dark:bg-black/50">
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