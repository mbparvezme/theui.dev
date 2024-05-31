---
title: theui-svelte - Chips
component_title: Chips
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
  import { processID } from "$lib";
  import { Chips } from "theui-svelte";

  export let data: PageData;
</script>

<DocContainer>
  <Head title="Chips" text="The Chips component is a versatile UI element used to display small blocks of information, such as tags, categories, or interactive items. It supports images, text, and an optional close button for dismissing the chips." />
  <Block title="Setup">
  <p class="not-prose">First, import the Chips component from your library.</p>
<Code title="Import">

```html
<script>
  import { Chips } from "theui-svelte";
</script>
```
</Code>
  </Block>

  <Block title="Usage">
    <p class="not-prose mb-4">Here is a basic example of how to use the Chips component:</p>
    <Example>
      <svelte:fragment slot="example">
        <Chips text="Example Chips" />
      </svelte:fragment>
<div slot="code">

```html
<Chips text="Example Chips" />
```
</div>
    </Example>
  </Block>

  <Block title="Image Chips">
    <p class="not-prose mb-4">Here is a basic example of how to use the Chips component:</p>
    <Example>
      <svelte:fragment slot="example">
        <Chips text="TheUI Logo" imgUrl="/img/theui-logo.png" />
      </svelte:fragment>
<div slot="code">

```html
<Chips text="TheUI Logo" imgUrl="/img/theui-logo.png" />
```
</div>
    </Example>
  </Block>

  <Block title="Disable Close Button">
    <p class="not-prose mb-4">If you do not want the chip to have a close button, you can disable it by setting the close prop to <code>false</code>.</p>
    <Example>
      <svelte:fragment slot="example">
        <Chips text="TheUI Logo" imgUrl="/img/theui-logo.png" close={false} />
      </svelte:fragment>
<div slot="code">

```html
<Chips ... close={false} />
```
</div>
    </Example>
  </Block>

  <Block title="Chips Size">
    <p class="not-prose mb-4">The Chips component supports different sizes, which can be adjusted using the size prop. This prop affects the padding and the dimensions of any included image. The available size options are <code>sm</code> (small), <code>md</code> (medium), and <code>lg</code> (large) where <code>md</code> is the default value!</p>
    <Example>
      <svelte:fragment slot="example">
        <Chips text="TheUI Logo" imgUrl="/img/theui-logo.png" size="sm" /><br>
        <Chips text="TheUI Logo" imgUrl="/img/theui-logo.png" size="md" /><br>
        <Chips text="TheUI Logo" imgUrl="/img/theui-logo.png" size="lg" />
      </svelte:fragment>
<div slot="code">

```html
<Chips ... size="sm" />
<Chips ... size="md" /> <!-- Default size! -->
<Chips ... size="lg" />
```
</div>
    </Example>
  </Block>

  <Block title="Custom Image Classes">
    <p class="not-prose mb-4">You can apply custom classes to the image using the <code>imgClass</code> prop.</p>
    <Example>
      <svelte:fragment slot="example">
        <Chips text="TheUI Logo" imgUrl="/img/theui-logo.png" imgClass="border border-brand p-1 bg-yellow-100" />
      </svelte:fragment>
<div slot="code">

```html
<Chips ... imgClass="border border-brand p-1 bg-yellow-100" />
```
</div>
    </Example>
  </Block>

  <Block title="Customize Chips Style">
    <p class="not-prose mb-4">You can apply custom styles using the <code>class</code> prop:</p>
    <Example>
      <svelte:fragment slot="example">
        <Chips text="TheUI Logo" imgUrl="/img/theui-logo.png" class="border border-red-500 bg-red-200 text-red-800" />
      </svelte:fragment>
<div slot="code">

```html
<Chips ... class="border border-red-500 bg-yellow-200" />
```
</div>
    </Example>
  </Block>

  <Block title="Props">
    <DataTable data={data.component.props} title="AccordionItem Props" mb=8 hideText={true} />
  </Block>

  <svelte:fragment slot="sidebar">
    <a href="#usage">Usage</a>
    <a href={processID("Image Chips")}>Image Chips</a>
    <a href={processID("Disable Close Button")}>Disable Close Button</a>
    <a href={processID("Chips Size")}>Chips Size</a>
    <a href={processID("Custom Image Classes")}>Custom Image Classes</a>
    <a href={processID("Customize Chips Style")}>Customize Chips Style</a>
    <a href="#props">Props</a>
  </svelte:fragment>

</DocContainer>