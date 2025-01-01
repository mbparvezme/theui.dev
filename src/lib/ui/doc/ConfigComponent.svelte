<script lang="ts">
  import { Table, Tab, Tabs, TabPanel } from 'theui-svelte';

  let { component }: {component?: any} = $props();
  
  const propsHeader = ['Name', 'Type', 'Default', 'Description'];
  const nonPropsHeader = ['Name', 'Description'];
  const propsKeys = ['name', 'type', 'default', 'description'];
  const nonPropsKeys = ['name','description'];

  let getKeys = (type: string) => type == 'props' || type == 'dynamicProps' ? propsKeys : nonPropsKeys;
  let getHeaders = (type: string) => type == 'props' || type == 'dynamicProps' ? propsHeader : nonPropsHeader;
</script>

<Tabs variant="tabs">
  {#snippet tabList()}
    {#each component as c}
      {#if c.data && c.data.length > 0}
        <Tab class="px-4 py-2">{c.title}</Tab>
      {/if}
    {/each}
  {/snippet}
  {#snippet tabPanel()}
    {#each component as c}
      {#if c.data && c.data.length > 0}
        <TabPanel>
          {#if c?.text}
            <p class="not-prose">{@html c.text}</p>
          {/if}
          <Table class="text-sm" data={c.data} keys={getKeys(c.key)} headers={getHeaders(c.key)} />
        </TabPanel>
      {/if}
    {/each}
  {/snippet}
</Tabs>