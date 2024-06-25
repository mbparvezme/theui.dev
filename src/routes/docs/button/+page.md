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
  <Head title="Button" text="The Button component provides a versatile and customizable button for various use cases. It supports different sizes, styles, and types, and can be used as a regular button or a link." edit_url={data.edit_url}/>
  <Block title="Setup">
    <p class="not-prose">Import the Button component into your Svelte file.</p>
<Code title="Import" space="none">

```html
<script>
  import { Button } from "theui-svelte"
</script>
```
</Code>
  </Block>

  <Block title="Usage">
    <Example>
      <p class="not-prose">Here is an example of how to use the Button component:</p>
      <svelte:fragment slot="example">
        <div class="text-center">
          <Button label="Click Me"/>
        </div>
      </svelte:fragment>
<div slot="code" class="py-0">

```html
<Button label="Click Me"/>
```
</div>
    </Example>
    <Example>
      <p class="not-prose pt-4"><b>Alternatively</b>, You can create a button with the <code>label</code> slots like the following example:</p>
      <svelte:fragment slot="example">
        <div class="text-center">
          <Button>
            <div slot="label">Click Me</div>
          </Button>
        </div>
      </svelte:fragment>
<div slot="code">

```html
<Button>
  <div slot="label">Click Me</div>
</Button>
```
</div>
    </Example>
  </Block>

  <Block title="Outline Button">
    <p class="not-prose">The <code>outline</code> attribute allows you to create a button with a sleek and modern outline style. This attribute gives the button a transparent background with a border, ideal for emphasizing secondary actions or achieving a minimalist design.</p>
    <Example>
      <svelte:fragment slot="example">
        <div class="text-center">
          <Button label="Click Me" outline/>
        </div>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Click Me" outline />
```
</div>
    </Example>
  </Block>

  <Block title="Button Size">
    <p class="not-prose">The size prop controls the padding and font size of the button. Available sizes are <code>sm</code>, <code>xs</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>0</code>. Default button size id <code>md</code>. Here's an example demonstrating different button sizes:</p>
    <Example>
      <svelte:fragment slot="example">
        <div class="text-center">
          <Button label="xl button" size="xl"/>
          <Button label="lg button" size="lg"/>
          <Button label="md button" size="md"/>
          <Button label="sm button" size="sm"/>
          <Button label="xs button" size="xs"/>
          <Button label="0 button" size="0"/>
        </div>
      </svelte:fragment>
<div slot="code">

```html
<Button label="xl button" size="xl" />
<Button label="lg button" size="lg" />
<Button label="md button" size="md" />
<Button label="sm button" size="sm" />
<Button label="xs button" size="xs" />
<Button label="0 button" size="0" />
```
</div>
    </Example>
  </Block>

  <Block title="Button With Link">
    <p class="not-prose">The Button component can also function as a link by providing an <code>href</code> prop. This allows you to create buttons that navigate to different pages or URLs. Whether linking to external websites or internal pages, the Button component offers a versatile solution for creating clickable elements that enhance the user experience.</p>
    <Example>
      <svelte:fragment slot="example">
        <div class="text-center">
          <Button label="Link Button 1" href="#button-with-link" />
          <Button label="Link Button 2" outline href="/docs" />
        </div>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Link Button 1" href="#button-with-link" />
<Button label="Link Button 2" href="/docs" outline />
```
</div>
    </Example>
  </Block>

  <Block title="Button State">
    <p class="not-prose">The Button component supports different states to indicate its interactivity and accessibility. These states include <code>disabled</code> and <code>read-only</code>.</p>
    <Example title="Disabled Button">
      <p class="not-prose">You can disable a button by using the <code>disabled</code> attribute. A disabled button appears visually inactive and cannot be interacted with.</p>
      <svelte:fragment slot="example">
        <div class="text-center">
          <Button label="Disabled" disabled />
          <Button label="Disabled outline" disabled outline />
        </div>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Disabled" disabled />
<Button label="Disabled outline" disabled outline />
```
</div>
    </Example>
    <Example title="Read-only Button">
      <p class="not-prose">A read-only button is similar to a disabled button in appearance, but it retains its interactivity. However, it prevents user input and interaction, making it suitable for displaying information without allowing user actions.</p>
      <svelte:fragment slot="example">
        <div class="text-center">
          <Button label="Readonly" readonly />&nbsp;
          <Button label="Readonly outline" readonly outline />
        </div>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Readonly" readonly />
<Button label="Readonly outline" readonly outline />
```
</div>
    </Example>
      <p class="not-prose">By utilizing the <code>disabled</code> and <code>readonly</code> attributes, you can control the state of your buttons to enhance user experience and ensure accessibility. These states provide visual cues to users and prevent unintended interactions, improving the usability of your application.</p>
  </Block>

  <Block title="Rounded Corners">
    <p class="not-prose">The Button component supports various border-radius options to create rounded buttons. You can customize the roundness of the button corners using the <code>rounded</code> prop.</p>
    <Example>
      <svelte:fragment slot="example">
        <div class="flex gap-2 mb-2 justify-center flex-wrap">
          <Button label="Submit" rounded="full" />
          <Button label="Submit" rounded="xl" />
          <Button label="Submit" rounded="lg" /><br>
          <Button label="Submit" rounded="md" />
          <Button label="Submit" rounded="sm" />
          <Button label="Submit" rounded="none" />
        </div>
        <div class="flex gap-2 mb-2 justify-center flex-wrap">
          <Button label="Submit" rounded="full" outline />
          <Button label="Submit" rounded="xl" outline />
          <Button label="Submit" rounded="lg" outline /><br>
          <Button label="Submit" rounded="md" outline />
          <Button label="Submit" rounded="sm" outline />
          <Button label="Submit" rounded="none" outline />
        </div>
      </svelte:fragment>
<div slot="code">

```html
<Button label="Submit" rounded="full" />
<Button label="Submit" rounded="xl" />
<Button label="Submit" rounded="lg" />
<Button label="Submit" rounded="md" />
<Button label="Submit" rounded="sm" />
<Button label="Submit" rounded="none" />

<Button label="Submit" rounded="full" outline />
<Button label="Submit" rounded="xl" outline />
<Button label="Submit" rounded="lg" outline />
<Button label="Submit" rounded="md" outline />
<Button label="Submit" rounded="sm" outline />
<Button label="Submit" rounded="none" outline />
```
</div>
    </Example>
  </Block>

  <Block title="Custom Style">
    <Example>
      <p class="not-prose">----</p>
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

  <Block title="Available Functions">
    <Example>
      <p class="not-prose">----</p>
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
    <a href={processID("Outline Button")}>Outline button</a>
    <a href={processID("Button Size")}>Button size</a>
    <a href={processID("Button With Link")}>Button with link</a>
    <a href={processID("Button State")}>Button state</a>
    <a href={processID("Rounded Corners")}>Rounded corners</a>
    <a href={processID("Custom Style")}>Custom style</a>
    <a href={processID("Available functions")}>Available functions</a>
    <a href="#props">Props</a>
    <a href="#slots">Slots</a>
  </svelte:fragment>

</DocContainer>