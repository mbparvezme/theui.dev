---
title: theui-svelte - Collapse
component_title: Collapse
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
  import { Collapse, Button } from "theui-svelte";
  import { processID } from "$lib";

  export let data: PageData;
</script>

<DocContainer>
  <Head title="Collapse" text="The Collapse component allows you to show and hide content independently. It is unstyled by default, giving you the flexibility to use any content and design according to your needs."/>
  <Block title="Setup">
  <p class="not-prose">To use the Collapse component, import it into your Svelte file as shown below.</p>
<Code title="Import">

```html
<script>
  import { Collapse } from "theui-svelte"
</script>
```
</Code>
  </Block>

  <Block title="Usage">
    <p class="not-prose mb-4">To use the Collapse component, import it into your Svelte file as shown above.</p>
    <Example title="Example with Button">
      <svelte:fragment slot="example">
        <Collapse label="COLLAPSE">
          <Button slot="title" label="Collapse using button"/>
          <div slot="body">
            <p>Sed hendrerit. Nullam dictum felis eu pede mollis pretium. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Maecenas malesuada.</p>
          </div>
        </Collapse>
      </svelte:fragment>
<div slot="code">

```html
<Collapse label="COLLAPSE">
  <Button slot="title" label="Collapse using button"/>
  <div slot="body">
    ...
  </div>
</Collapse>
```
</div>
    </Example>
    <Example title="Example with HTML Tag">
      <svelte:fragment slot="example">
        <Collapse label="COLLAPSE">
          <p slot="title" label="Collapse" class="font-bold">Collapse using HTML tag</p>
          <div slot="body">
            <p>Sed hendrerit. Nullam dictum felis eu pede mollis pretium. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Maecenas malesuada.</p>
          </div>
        </Collapse>
      </svelte:fragment>
<div slot="code">

```html
<Collapse label="COLLAPSE">
  <p slot="title" label="Collapse" class="font-bold">Collapse using HTML tag</p>
  <div slot="body">
    ...
  </div>
</Collapse>
```
</div>
    </Example>
  </Block>



  <Block title="Outlying Collapse">
    <div class="not-prose mb-8">
      <p class="mb-2">The Collapse component offers the flexibility to separate the collapse header (title) and body (content). This can be useful in scenarios where you want the toggle element (such as a button) to be located separately from the collapsible content.</p>
      <p class="mb-2">To achieve this, use the <code>id</code> prop to link the separate header and body. Ensure both the header and body elements share the same <code>id</code> value to establish the connection.</p>
      <p>In the example below, we create a collapse button and a separate content section that are linked together by using the same <code>id</code> value (<code>myCollapse1</code>). This allows the button to control the visibility of the content.</p>
    </div>
    <Example>
      <svelte:fragment slot="example">
        <div class="flex flex-col gap-y-1">
          <Collapse label="COLLAPSE" id="myCollapse1">
            <Button slot="title" label="Separate Collapse Heading"/>
          </Collapse>
          <Collapse label="COLLAPSE" id="myCollapse1">
            <div slot="body">
              Separate collapse body content...
            </div>
          </Collapse>
        </div>
      </svelte:fragment>
<div slot="code">

```html
<!-- First, define the button that will act as the toggle -->
<Collapse label="COLLAPSE" id="myCollapse1">
  <Button slot="title" label="Separate Collapse Heading"/>
</Collapse>

<!-- Next, define the content that will be shown or hidden -->
<Collapse label="COLLAPSE" id="myCollapse1">
  <div slot="body">
    Separate collapse body content...
  </div>
</Collapse>
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
    <a href={processID("Outlying Collapse")}>Outlying Collapse</a>
    <a href="#props">Props</a>
    <a href="#slots">Slots</a>
  </svelte:fragment>

</DocContainer>