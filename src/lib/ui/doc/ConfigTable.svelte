<script lang="ts">
  import { Table } from 'theui-svelte';

  interface Props {
    type?: 'props' | 'slots',
    mb?: 0|8|12|16,
    hideText?: boolean,
    title?: false|string,
    data?: any,
    keys?: string[],
    headers?: string[],
  };

  let {
    type = "props",
    mb,
    hideText = false,
    title = false,
    data = [],
    keys = type != 'slots' ? ['name', 'type', 'default', 'description'] : ['name','description'],
    headers = type != 'slots' ? ['Name', 'Type', 'Default', 'Description'] : ['name','description'],
  }: Props = $props();
</script>

<div class="not-prose" class:mb-0={mb==0} class:mb-8={mb==8} class:mb-12={mb==12} class:mb-16={mb==16}>
  {#if !hideText}
    <p class="mb-4">
      {#if type == 'props'}The component has the following props and default values. Please visit <a href="/docs/types">types page</a> for more details and definitions.{/if}
      {#if type == 'slots'}The component uses the following slots:{/if}
    </p>
  {/if}
  {#if title}
    <h4 class="text-xl font-semibold font-body text-gray-700 dark:text-gray-400 mt-0 font-body mb-4">{title}</h4>
  {/if}
  <Table class="text-sm" {data} {keys} {headers} />
</div>