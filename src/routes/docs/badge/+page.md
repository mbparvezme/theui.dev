---
title: theui-svelte - Badge
component_title: Badge
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
  import { Badge } from "theui-svelte";
  import { processID } from "$lib";

  export let data: PageData;
</script>

<DocContainer>
  <Head title="Badge" text="The Badge component is a versatile UI element used for displaying small counts, labeling, or providing important indications to users. Badges are commonly used to highlight new content, show notifications, or denote status updates." />
  <Block title="Setup">
    <p class="not-prose">To use the Badge component in your project, import the required component:</p>
<Code title="Import">

```html
<script>
  import { Badge } from "theui-svelte"
</script>
```
</Code>
  </Block>

  <Block title="Example">
    <p class="not-prose mb-4">You can create different types of badges using the <code>title</code> and <code>text</code> props. Here are some examples:</p>
    <Example>
      <svelte:fragment slot="example">
        <Badge title="Hello badge"/> &nbsp; &nbsp; &nbsp;
        <Badge text="New"/>
      </svelte:fragment>
<div slot="code">

```html
<!-- Indicator badge -->
<Badge title="Hello badge" />

<!-- Text badge -->
<Badge text="New" />
```
</div>
    </Example>
  </Block>

  <Block title="Grow Badge">
    <p class="not-prose mb-4">By default, the size of the Badge component is fixed. However, you can make the Badge grow according to the text size by setting the <code>grow</code> prop to <code>true</code>.</p>
    <Example>
      <svelte:fragment slot="example">
        <div class="flex gap-8">
          <div class="w-full">
            <h4 class="mb-2">Without <code>grow</code></h4>
            <p class="text-2xl">Products <Badge title="Hello badge"/></p>
            <p class="text-2xl my-0">Products <Badge text="New"/></p>
          </div>
          <div class="w-full">
            <h4 class="mb-2">With <code>grow</code></h4>
            <p class="text-2xl">Products <Badge grow title="Hello badge" round="full"/></p>
            <p class="text-2xl my-0">Products <Badge grow text="New"/></p>
          </div>
        </div>
      </svelte:fragment>
<div slot="code">

```html
<!-- Indicator badge -->
<p class="text-2xl">Products <Badge title="Hello badge"/></p>
<p class="text-2xl">Products <Badge text="New"/></p>

<!-- Text badge -->
<p class="text-2xl">Products <Badge grow title="Hello badge"/></p>
<p class="text-2xl">Products <Badge grow text="New"/></p>
```
</div>
    </Example>
    <p class="not-prose">In the examples above, the second badge in each pair will grow to fit the text size, making the badge size dynamic.</p>
  </Block>

  <Block title="Fixed Badge">
    <p class="not-prose mb-4">You can position badges at fixed locations relative to their parent elements using the dynamic prop <code>fixed</code>.</p>
    <Example>
      <svelte:fragment slot="example">
        <div class="flex items-center gap-8">
          <p class="relative p-2 bg-primary dark:bg-gray-700">
            Notifications <Badge title="Hello badge" fixed/>
          </p>
          <p class="relative p-2 bg-primary dark:bg-gray-700">
            Notifications <Badge text="New" fixed/>
          </p>
        </div>
      </svelte:fragment>
<div slot="code">

```html
<p class="relative ...">
  Notifications <Badge title="Hello badge" fixed/>
</p>

<p class="relative ...">
  Notifications <Badge text="New" fixed/>
</p>
```
</div>
    </Example>
    <p class="not-prose">In these examples, the badges will be positioned at the top of their parent elements, providing a fixed badge location.</p>
  </Block>


  <Block title="Custom Color">
    <p class="not-prose mb-4">The Badge component supports custom colors, allowing you to tailor the appearance to match your application's theme or to convey specific meanings. By default, the Badge component uses standard styles, but you can easily override these styles with custom CSS classes.</p>
    <p class="not-prose mb-4">You can customize the background color of indicator badges by adding your own CSS classes. Below are some examples demonstrating how to apply different background colors to the Badge component:</p>
    <Example>
      <svelte:fragment slot="example">
        <Badge title="Hello badge"/>
        <Badge title="Hello badge" class="bg-green-500"/>
        <Badge title="Hello badge" class="bg-yellow-400"/>
        <Badge title="Hello badge" class="bg-cyan-500"/>
        <br>
        <Badge text="New"/>
        <Badge text="New" class="bg-green-500 text-white"/>
        <Badge text="New" class="bg-yellow-400 text-black"/>
        <Badge text="New" class="bg-cyan-500 text-black"/>
      </svelte:fragment>
<div slot="code">

```html
<!-- Indicator badge -->
<Badge title="Hello badge"/>
<Badge title="Hello badge" class="bg-green-500"/>
<Badge title="Hello badge" class="bg-yellow-400"/>
<Badge title="Hello badge" class="bg-cyan-500"/>

<!-- Text badge -->
<Badge text="New"/>
<Badge text="New" class="bg-green-500 text-white"/>
<Badge text="New" class="bg-yellow-400 text-black"/>
<Badge text="New" class="bg-cyan-500 text-black"/>
```
</div>
    </Example>
    <p class="not-prose mb-4">In these examples, additional classes like <code>text-white</code> and <code>text-black</code> are used along with background color classes to set both the background and text colors. This provides flexibility in styling the badges to meet your design needs.</p>
  </Block>

  <Block title="Props">
    <DataTable data={data.component.props} hideText={true} mb=8 />
    <DataTable data={data.component.dynamicProps} type="slots" title="Badge Dynamic Props" hideText={true} />
  </Block>
  {#if data.component?.slots}
  <Block title="Slots">
    <DataTable data={data.component.slots} type="slots"/>
  </Block>
  {/if}

  <svelte:fragment slot="sidebar">
    <a href="#example">Example</a>
    <a href={processID("Grow Badge")}>Grow badge</a>
    <a href={processID("Fixed Badge")}>Fixed badge</a>
    <a href={processID("Custom Color")}>Custom Color</a>
    <a href="#props">Props</a>
  </svelte:fragment>

</DocContainer>