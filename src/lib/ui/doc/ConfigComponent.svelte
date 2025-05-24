<script lang="ts">
  import { processID } from '$lib';
  import { Table, Tab, Tabs, TabPanel } from 'theui-svelte';
  let { component, title, hideText = false }: {component?: any, title?: string, hideText?: boolean} = $props();
  const propsHeader = ['Name', 'Type', 'Default', 'Description'];
  const nonPropsHeader = ['Name', 'Description'];
  const propsKeys = ['name', 'type', 'default', 'description'];
  const nonPropsKeys = ['name','description'];

  let getKeys = (type: string) => type == 'props' ? propsKeys : nonPropsKeys;
  let getHeaders = (type: string) => type == 'props' ? propsHeader : nonPropsHeader;
</script>

{#if title}
  <h4 id={processID(title, false)} class="config-title text-xl font-semibold font-body text-gray-700 dark:text-gray-400 my-0 font-body">{@html title}</h4>
{/if}

<Tabs variant="tabs" class="config-tabs">
  {#snippet tabs()}
    {#each component as c}
      {#if c.data && c.data.length > 0}
        <Tab class="px-4 py-2 uppercase text-sm font-semibold tracking-wider">{c.title}</Tab>
      {/if}
    {/each}
  {/snippet}
  {#each component as c}
    {#if c.data && c.data.length > 0}
      <TabPanel>
        {#if !hideText}
          <p class="mb-0">
            {#if c.key == 'props'}This component has the following props with their default values. For more details, visit the <a href="/docs/types">types page</a>.{/if}
            {#if c.key == 'dynamicProps'}Dynamic props are props that don't require a value. Their effect depends on whether they are present or missing in the component, similar to HTML attributes. The component has the following dynamic props:{/if}
            {#if c.key == 'snippets'}Use the following snippet to add custom content or elements:{/if}
            {#if c.key == 'functions'}This component includes the following functions:{/if}
          </p>
        {/if}

        <Table class="my-0" data={c.data} keys={getKeys(c.key)} headers={getHeaders(c.key)} />
      </TabPanel>
    {/if}
  {/each}
</Tabs>

<style>
  @reference "../../../app.css";
:global(.config-tabs + .config-title){
  @apply mt-4;
}
</style>