---
title: theui-svelte - Breadcrumb
component_title: Breadcrumb
description: Improve navigation in your Svelte app with TheUI-Svelte's Breadcrumb component. Guide users effortlessly through your content hierarchy.
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte";
  import Head from "$lib/ui/doc/Head.svelte";
  import Block from "$lib/ui/doc/Block.svelte";
  import Code from "$lib/ui/doc/Code.svelte";
  import DataTable from "$lib/ui/doc/DataTable.svelte";
  import Example from "$lib/ui/doc/Example.svelte";
  import { Breadcrumb } from "theui-svelte";
  import { processID } from "$lib";

  export let data: PageData;

  let example_bc = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Company"
    },
  ];
</script>

<DocContainer>
  <Head title="Breadcrumb" text="The Breadcrumb component displays the location of the current page within a navigational hierarchy. It helps users understand the structure of your site and navigate back to previous pages easily." edit_url={data.edit_url}/>
  <Block title="Setup">
  <p class="not-props">To use the Breadcrumb component, you need to import it into your Svelte file as shown below.</p>
<Code title="Import">

```html
<script>
  import { Breadcrumb } from "theui-svelte"
</script>
```
</Code>
  </Block>


  <Block title="Example">
  <p class="not-props mb-4">Here is a basic example of how to use the Breadcrumb component:</p>
    <Example>
      <svelte:fragment slot="example">
        <Breadcrumb data={example_bc} class="bg-primary" />
      </svelte:fragment>
<div slot="code">

```html
<script>
  let breadcrumbData: BREADCRUMB_DATA = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Company" }
  ]
</script>

<Breadcrumb data={breadcrumbData} />
```
</div>
    </Example>
    <p class="not-props mb-4">This will render a breadcrumb navigation with the links "Home", "About", and "Company".</p>
  </Block>


  <Block title="Change Separator">
    <p class="not-prose mb-4">To change the separator symbol in the breadcrumb, set the <code>separator</code> prop to the desired symbol.</p>
    <Example>
      <svelte:fragment slot="example">
        <Breadcrumb data={example_bc} separator="&gt;" />
      </svelte:fragment>
<div slot="code">

```html
<Breadcrumb separator=">" ... />
or
<Breadcrumb separator="&gt;" ... />
```
</div>
    </Example>
  </Block>

  <Block title="Link Color">
    <p class="not-prose mb-4">You can customize the colors of the breadcrumb links using Tailwind CSS classes. Use the <code>activeLinkClass</code> prop for the active link color and the <code>linkClass</code> prop for the default link color.</p>
    <Example>
      <svelte:fragment slot="example">
        <Breadcrumb data={example_bc} activeLinkClass="text-pink-500" linkClass="text-yellow-700" />
      </svelte:fragment>
<div slot="code">

```html
<Breadcrumb activeLinkClass="text-pink-500" linkClass="text-yellow-700" ... />
```
</div>
    </Example>
  </Block>

  <Block title="Props">
    <DataTable data={data.component.props} hideText={true} />
  </Block>

  <svelte:fragment slot="sidebar">
    <a href="#example">Example</a>
    <a href={processID("Change Separator")}>Link Separator</a>
    <a href={processID("Link Color")}>Link Color</a>
    <a href="#props">Props</a>
  </svelte:fragment>

</DocContainer>