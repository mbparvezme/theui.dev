<script lang="ts">
  import { resolve } from '$app/paths';
  import { processID } from '$lib';
  import { Table, THead, TBody, TR, TH, TD, Tab, Tabs, TabPanel } from 'theui-svelte';
  let { component, title, hideText = false }: {component?: any, title?: string, hideText?: boolean} = $props();
  const propsHeader = ['Name', 'Type', 'Default', 'Description'];
  const nonPropsHeader = ['Name', 'Description'];
  const propsKeys = ['name', 'type', 'default', 'description'];
  const nonPropsKeys = ['name','description'];

  // "props", and any section named like "tab-props", list a type and a default
  const isProps = (key: string) => key == 'props' || key.endsWith('-props');
  let getKeys = (type: string) => isProps(type) ? propsKeys : nonPropsKeys;
  let getHeaders = (type: string) => isProps(type) ? propsHeader : nonPropsHeader;
  const hasIntro = (key: string) => ['props', 'dynamicProps', 'snippets', 'functions'].includes(key);
</script>

{#if title}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <h4 id={processID(title, false)} class="config-title text-xl font-semibold font-body text-gray-700 dark:text-gray-400 my-0 font-body">{@html title}</h4>
{/if}

<Tabs variant="tabs" class="config-tabs">
  {#snippet tabs()}
    {#each component as c (c.key)}
      {#if c.data && c.data.length > 0}
        <Tab value={c.key} class="px-4 py-2 uppercase text-sm font-semibold tracking-wider">{c.title}</Tab>
      {/if}
    {/each}
  {/snippet}
  {#each component as c (c.key)}
    {#if c.data && c.data.length > 0}
      <TabPanel value={c.key}>
        {#if !hideText && hasIntro(c.key)}
          <p class="mb-0">
            {#if c.key == 'props'}This component has the following props with their default values. For more details, visit the <a href={resolve("/docs/types")}>types page</a>.{/if}
            {#if c.key == 'dynamicProps'}Dynamic props are props that don't require a value. Their effect depends on whether they are present or missing in the component, similar to HTML attributes. The component has the following dynamic props:{/if}
            {#if c.key == 'snippets'}Use the following snippet to add custom content or elements:{/if}
            {#if c.key == 'functions'}This component includes the following functions:{/if}
          </p>
        {/if}

        <!-- Cells are rendered as HTML (type links, <code>). The content is authored in the route files, not user input -->
        <Table class="my-0">
          <THead>
            <TR tableHeader={true}>
              {#each getHeaders(c.key) as header (header)}
                <TH scope="col">{header}</TH>
              {/each}
            </TR>
          </THead>
          <TBody>
            {#each c.data as row, i (i)}
              <TR>
                {#each getKeys(c.key) as key (key)}
                  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                  <TD>{@html String(row[key] ?? "")}</TD>
                {/each}
              </TR>
            {/each}
          </TBody>
        </Table>
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