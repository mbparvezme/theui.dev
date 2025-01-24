<script lang="ts">
  import { Table } from 'theui-svelte'

  interface Props {
    type?: 'props' | 'dynamicProps' | 'functions'
    mb?: 0|8|12|16
    hideText?: boolean
    title?: string
    data?: any,
    keys?: string[],
    headers?: string[]
  }

  let {
    type = 'props',
    mb = 0,
    hideText,
    title = "Props",
    data = [],
    keys = (type == 'props') ? ['name', 'type', 'default', 'description'] : ['name','description'],
    headers = (type == 'props') ? ['Name', 'Type', 'Default', 'Description'] : ['name','description']
  }: Props = $props()
</script>

<div class="not-prose" class:mb-0={mb==0} class:mb-8={mb==8} class:mb-12={mb==12} class:mb-16={mb==16}>
  {#if title}
    <h4 class="font-semibold font-body text-gray-500">{title}</h4>
  {/if}
  {#if !hideText}
    <p class="mb-4">
      {#if type == 'props'}The component has the following props with the given default values. Please visit <a href="/docs/types">types page</a> for detailed type definitions.{/if}
      {#if type == 'functions'}The component uses the following functions available:{/if}
    </p>
  {/if}
  <Table class="text-sm" {data} {keys} {headers} />
</div>