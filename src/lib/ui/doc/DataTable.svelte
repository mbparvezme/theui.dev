<script lang="ts">
  import { Table } from 'theui-svelte'
  export let  type: 'props' | 'slots' = 'props'
  export let  mb = 0|8|12|16
  export let  hideText = false
  export let  title: false|string = false
  export let  data: any = [],
              keys = type != 'slots' ? ['name', 'type', 'default'] : ['name','description'],
              headers = type != 'slots' ? ['Name', 'Type', 'Default'] : ['name','description']
</script>

<div class="not-prose" class:mb-0={mb==0} class:mb-8={mb==8} class:mb-12={mb==12} class:mb-16={mb==16}>
  {#if !hideText}
    <p class="mb-4">
      {#if type == 'props'}The component has the following props and default values. Please visit <a href="/docs/types">types page</a> for more details and definations.{/if}
      {#if type == 'slots'}The component uses the following slots:{/if}
    </p>
  {/if}
  {#if title}
    <h4 class="font-semibold font-body text-gray-500 mb-4">{title}</h4>
  {/if}
  <Table class="text-sm" {data} {keys} {headers} />
</div>