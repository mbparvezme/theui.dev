---
title: theui-svelte - Table
component_title: Table
description: Present data effectively in your Svelte app with TheUI-Svelte's Table component, supporting responsive and customizable designs.
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte";
  import Head from "$lib/ui/doc/Head.svelte";
  import Block from "$lib/ui/doc/Block.svelte";
  import Code from "$lib/ui/doc/Code.svelte";
  import DataTable from "$lib/ui/doc/DataTable.svelte";
  import Example from "$lib/ui/doc/Example.svelte";
  import { Table, THead, TH, TBody, TR, TD } from "theui-svelte";
  import { processID } from "$lib";

  export let data: PageData;
</script>

<DocContainer>
  <Head title="Table" text="--" />
  <Block title="Setup">
    <p class="not-prose mb-4">----</p>
<Code title="Import">

```html
<script>
  import { Table, THead, TH, TBody, TR, TD } from "theui-svelte"
</script>
```
</Code>
  </Block>

  <Block title="Usage">
    <Example title="Basic Example">
      <p class="not-prose mb-2">----</p>
      <svelte:fragment slot="example">
        
      </svelte:fragment>
<div slot="code">

```html

```
</div>
    </Example>
  </Block>

  <Block title="Props">
    <DataTable data={data.component.props} hideText={true} mb=8 />
    <!-- <DataTable data={data.component.dynamicProps} type="slots" title="Dynamic Props" hideText={true} /> -->
  </Block>
  <!-- <Block title="Slots">
    <DataTable data={data.component.slots} type="slots"/>
  </Block> -->

  <svelte:fragment slot="sidebar">
    <a href="#usage">Usage</a>
    <!-- <a href={processID("Outlying Collapse")}>Outlying Collapse</a> -->
    <a href="#props">Props</a>
    <a href="#slots">Slots</a>
  </svelte:fragment>

</DocContainer>