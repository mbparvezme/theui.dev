---
title: theui-svelte - Container
component_title: Container
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
  import { Container } from "theui-svelte";
</script>

<DocContainer>
  <Head title="Container" text="The Container component is a flexible block element designed to control the spacing and structure of a web page. It provides a default padding setup but can be customized easily with your own classes." />
  <Block title="Setup">
  <p class="not-prose">First, import the Container component from your library.</p>
<Code title="Import">

```html
<script>
  import { Container } from "theui-svelte"
</script>
```
</Code>
  </Block>

  <Block title="Example">
  <p class="not-prose">Here is a basic example of how to use the Container component:</p>
<Code>

```html
<Container>
<!-- Block content -->
</Container>
```
    </Code>
  </Block>

  <Block title="Customizing the Container">
  <p class="not-prose">The Container component comes with default padding classes (<code>px-8 py-24 md:px-16</code>). However, you can override these defaults by providing your own classes via the class prop.</p>
    <Code>

```html
<Container class="p-0 my-class mb-24">
  <!-- Block content -->
</Container>
```
</Code>
  </Block>

  <svelte:fragment slot="sidebar">
    <a href="#example">Example</a>
  </svelte:fragment>

</DocContainer>