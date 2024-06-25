---
title: theui-svelte - SVG icon
component_title: SVG icon
description: Add scalable vector icons to your Svelte app with TheUI-Svelte's SVG Icon component, enhancing your UI with clarity and style.
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte";
  import Head from "$lib/ui/doc/Head.svelte";
  import Block from "$lib/ui/doc/Block.svelte";
  import Code from "$lib/ui/doc/Code.svelte";
  import DataTable from "$lib/ui/doc/DataTable.svelte";
  import Example from "$lib/ui/doc/Example.svelte";
  import { Svg, Alert } from "theui-svelte";
  import { processID } from "$lib";

  export let data: PageData;
</script>

<DocContainer>
  <Head title="Svg Icon" text="The Svg component allows you to easily add SVG icons to your project. It acts as a wrapper for SVG elements and can replace the standard svg tag. You can include any path or other SVG elements within it." edit_url={data.edit_url}/>
  <Block title="Setup">
<Code title="Import">

```html
<script>
  import { Svg } from "theui-svelte"
</script>
```
</Code>
  </Block>

  <Block title="Usage">
    <Example>
      <svelte:fragment slot="example">
        <div class="flex justify-center text-green-500">
          <Svg>
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </Svg>
        </div>
      </svelte:fragment>

<div slot="code">

```html
<Svg>
  <path d="M0 4a2 2 0 0 1 ... 5.383v5.722Z"/>
</Svg>
```
</div>
    </Example>
  </Block>



  <Block title="Sizes">
    <p class="not-prose mb-4">By default, the size of the SVG icon is <code>1rem</code> (in both height and width). You can change the size using the <code>size</code> prop. The value provided to the <code>size</code> prop will be interpreted as a rem unit. This example sets the size of the SVG icon to <code>2rem</code>:</p>
    <div class="not-prose">
      <Alert type="info" theme="light" variant="borderStart" icon={false} round = 'none' dismissible={false}>
        <p>Please note that, the <code>size</code> props is <b>suitable for square icons</b>. If an icon is not square, please use <code>width</code> or <code>height</code> or both.</p>
      </Alert>
    </div>
    <Example>
      <svelte:fragment slot="example">
        <div class="flex items-center justify-center gap-4">
          <Svg>
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </Svg>
          <Svg size={2}>
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </Svg>
        </div>
      </svelte:fragment>
<div slot="code">

```html
<Svg> <!-- Icon size 1rem in height and width -->
  ...
</Svg>

<Svg size={2}> <!-- Icon size 2rem in height and width -->
  ...
</Svg>
```
</div>
    </Example>
    <Example title="Non-Square Icons">
    <p class="not-prose mb-4">The <code>size</code> props only works with <b>square icons</b>. For non-square icons, you should use the width and height props to specify the dimensions explicitly. This example sets the width to <code>3rem</code> and the height to <code>2rem</code>:</p>
<div slot="code">

```html
<Svg width="3rem" height="2rem">
  ...
</Svg>
```
</div>
    </Example>
  </Block>

  <Block title="Props">
    <DataTable data={data.component.props} title="AccordionItem Props" mb=8 hideText={true} />
    <DataTable data={data.component.dynamicProps} type="slots" title="AccordionItem Dynamic Props" hideText={true} />
  </Block>

  <svelte:fragment slot="sidebar">
    <a href="#usage">Usage</a>
    <a href="#sizes">Sizes</a>
    <a href="#props">Props</a>
  </svelte:fragment>

</DocContainer>