---
title: theui-svelte - Tooltip
component_title: Tooltip
description: ------
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte";
  import Head from "$lib/ui/doc/Head.svelte";
  import Block from "$lib/ui/doc/Block.svelte";
  import Code from "$lib/ui/doc/Code.svelte";
  import DataTable from "$lib/ui/doc/DataTable.svelte";
  import Example from "$lib/ui/doc/Example.svelte";
  import { Tooltip } from "theui-svelte";
  import { processID } from "$lib";

  export let data: PageData;
</script>

<DocContainer>
  <Head title="Tooltip" text="The Tooltip component provides a way to display informative text when users hover over or click on an element. It supports various positions, animations, and can be globally initialized or used on specific pages."/>
  <Block title="Setup">
  <p class="not-prose">First, import and initialize the Tooltip component. It's best to initialize the Tooltip globally, such as in the <code>+layout.svelte</code> file, but you can also include it on specific pages if needed.</p>
<Code title="Import">

```html
<script>
  import { Tooltip } from "theui-svelte";
</script>

<Tooltip />
```
</Code>
  </Block>

  <Block title="Usage">
    <p class="not-prose">To display a tooltip, add the <code>data-tooltip</code> attribute to any HTML element. The tooltip will inherit default configurations from the Tooltip component but can be customized using data attributes.</p>
    <Example title="Example with Button">
      <svelte:fragment slot="example">
        <div style="width: 100px; height: 100px;" class="bg-slate-300 text-center pt-8 mx-auto" data-tooltip="Tooltip text" data-tooltip-position="top">Tooltip</div>
      </svelte:fragment>
<div slot="code">

```html
<div ... data-tooltip="Tooltip text">Tooltip</div>
```
</div>
    </Example>
  </Block>

  <Block title="Tooltip Position">
    <p class="not-prose"> </p>
    <Example title="From Tooltip component">
      <svelte:fragment slot="example">
      </svelte:fragment>
<div slot="code">

```html

```
</div>
    </Example>
    <Example title="Using data attribute">
      <svelte:fragment slot="example">
      </svelte:fragment>
<div slot="code">

```html

```
</div>
    </Example>
  </Block>

  <Block title="Tooltip Animation">
    <p class="not-prose"> </p>
    <Example title="From Tooltip component">
      <svelte:fragment slot="example">
      </svelte:fragment>
<div slot="code">

```html

```
</div>
    </Example>
    <Example title="Using data attribute">
      <svelte:fragment slot="example">
      </svelte:fragment>
<div slot="code">

```html

```
</div>
    </Example>
  </Block>

  <Block title="Tooltip Event">
    <p class="not-prose"> </p>
    <Example title="From Tooltip component">
      <svelte:fragment slot="example">
      </svelte:fragment>
<div slot="code">

```html

```
</div>
    </Example>
    <Example title="Using data attribute">
      <svelte:fragment slot="example">
      </svelte:fragment>
<div slot="code">

```html

```
</div>
    </Example>
  </Block>

  <Block title="Tooltip Background">
    <p class="not-prose"> </p>
    <Example title="From Tooltip component">
      <svelte:fragment slot="example">
      </svelte:fragment>
<div slot="code">

```html

```
</div>
    </Example>
    <Example title="Using data attribute">
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
  </Block>


</DocContainer>