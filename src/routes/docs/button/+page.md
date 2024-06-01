---
title: theui-svelte - Button
component_title: Button
description: Create responsive and stylish buttons for your Svelte app with TheUI-Svelte's Button component, fully customizable with TailwindCSS.
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte";
  import Head from "$lib/ui/doc/Head.svelte";
  import Block from "$lib/ui/doc/Block.svelte";
  import Code from "$lib/ui/doc/Code.svelte";
  import DataTable from "$lib/ui/doc/DataTable.svelte";
  import Example from "$lib/ui/doc/Example.svelte";
  import { Button } from "theui-svelte";
  import { processID } from "$lib";

  export let data: PageData;
</script>

<DocContainer>
  <Head title="Button" text="This is intro" />
  <Block title="Setup">
    <p class="not-prose mb-4">This is button</p>
<Code title="Import">

```html
<script>
  import { Button } from "theui-svelte"
</script>
```
</Code>
  </Block>

  <Block title="Usage">
    <Example title="Basic Example">
      <p class="not-prose mb-2">----</p>
      <svelte:fragment slot="example">
        <Button label="Submit"/>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Submit"/>
```
</div>
    </Example>
  </Block>

  <Block title="Outline Button">
    <Example title="Basic Example">
      <p class="not-prose mb-2">----</p>
      <svelte:fragment slot="example">
        <Button label="Submit"/>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Submit"/>
```
</div>
    </Example>
  </Block>

  <Block title="Button Size">
    <Example title="Basic Example">
      <p class="not-prose mb-2">----</p>
      <svelte:fragment slot="example">
        <Button label="Submit"/>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Submit"/>
```
</div>
    </Example>
  </Block>

  <Block title="Button With Custom Component">
    <Example title="Basic Example">
      <p class="not-prose mb-2">----</p>
      <svelte:fragment slot="example">
        <Button label="Submit"/>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Submit"/>
```
</div>
    </Example>
  </Block>

  <Block title="Icon Button">
    <Example title="Basic Example">
      <p class="not-prose mb-2">----</p>
      <svelte:fragment slot="example">
        <Button label="Submit"/>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Submit"/>
```
</div>
    </Example>
  </Block>

  <Block title="Button Disabled">
    <Example title="Basic Example">
      <p class="not-prose mb-2">----</p>
      <svelte:fragment slot="example">
        <Button label="Submit"/>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Submit"/>
```
</div>
    </Example>
  </Block>

  <Block title="Button With Link">
    <Example title="Basic Example">
      <p class="not-prose mb-2">----</p>
      <svelte:fragment slot="example">
        <Button label="Submit"/>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Submit"/>
```
</div>
    </Example>
  </Block>

  <Block title="Button With Icon">
    <Example title="Basic Example">
      <p class="not-prose mb-2">----</p>
      <svelte:fragment slot="example">
        <Button label="Submit"/>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Submit"/>
```
</div>
    </Example>
  </Block>

  <Block title="Rounded Corners">
    <Example title="Basic Example">
      <p class="not-prose mb-2">----</p>
      <svelte:fragment slot="example">
        <Button label="Submit"/>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Submit"/>
```
</div>
    </Example>
  </Block>

  <Block title="Shadow">
    <Example title="Basic Example">
      <p class="not-prose mb-2">----</p>
      <svelte:fragment slot="example">
        <Button label="Submit"/>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Submit"/>
```
</div>
    </Example>
  </Block>

  <Block title="Props">
    <DataTable data={data.component.props} hideText={true} mb=8 />
    <DataTable data={data.component.dynamicProps} type="slots" title="Dynamic Props" hideText={true} />
  </Block>
  <Block title="Slots">
    <DataTable data={data.component.slots} type="slots"/>
  </Block>

  <svelte:fragment slot="sidebar">
    <a href="#usage">Usage</a>
    <a href={processID("Outlying Collapse")}>--- Outlying Collapse</a>
    <a href="#props">Props</a>
    <a href="#slots">Slots</a>
  </svelte:fragment>

</DocContainer>