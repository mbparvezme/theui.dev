---
title: theui-svelte - Alert
component_title: Alert
description: Utilize TheUI-Svelte's Alert component to display crucial messages and notifications in your Svelte applications with customizable styles.
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte";
  import Head from "$lib/ui/doc/Head.svelte";
  import Block from "$lib/ui/doc/Block.svelte";
  import Code from "$lib/ui/doc/Code.svelte";
  import DataTable from "$lib/ui/doc/DataTable.svelte";
  import Example from "$lib/ui/doc/Example.svelte";
  import { Alert, Svg } from "theui-svelte";
  import { processID } from "$lib";

  export let data: PageData;
</script>

<DocContainer>
  <Head title="Alert" text="The Alert component displays feedback or contextual messages to your users. Using the Alert component, you can provide various types of feedback such as success, error, warning, or general information." />
  <Block title="Setup">
    <p class="not-prose">To use the Alert component in your project, import the required component:</p>
<Code title="Import">

```html
<script>
  import { Alert } from "theui-svelte"
</script>
```
</Code>
  </Block>

  <Block title="Usage">
    <p class="not-prose mb-4">There are 4 types of <code>Alert</code> you can create using the <code>type</code> prop. The default type is <code>error</code>. Other types are <code>'info'</code>, <code>'success'</code> and <code>'warning'</code>. Here are some examples:</p>
    <Example>
      <svelte:fragment slot="example">
        <Alert>I'm error alert!</Alert>
        <Alert type="info">I'm info alert!</Alert>
        <Alert type="success">I'm success alert!</Alert>
        <Alert type="warning">I'm warning alert!</Alert>
      </svelte:fragment>
<div slot="code">

```html
<Alert>I'm error alert!</Alert> <!-- Default type: `error` -->
<Alert type="info">I'm info alert!</Alert>
<Alert type="success">I'm success alert!</Alert>
<Alert type="warning">I'm warning alert!</Alert>
```
</div>
    </Example>
  </Block>


  <Block title="Light Theme">
    <p class="not-prose mb-4">To apply a light theme to the alerts, use the <code>theme</code> prop.The <code>theme</code> prop can have two values, <code>default</code> (which is the default value) or <code>light</code>.</p> 
    <Example>
      <svelte:fragment slot="example">
        <Alert theme="light">I'm error alert!</Alert>
        <Alert theme="light" type="info">I'm info alert!</Alert>
        <Alert theme="light" type="success">I'm success alert!</Alert>
        <Alert theme="light" type="warning">I'm warning alert!</Alert>
      </svelte:fragment>
<div slot="code">

```html
<Alert theme="light">...</Alert>
<Alert theme="light" type="info">...</Alert>
<Alert theme="light" type="success">...</Alert>
<Alert theme="light" type="warning">...</Alert>
```
</div>
    </Example>
  </Block>


  <Block title="Alert Variant">
    <p class="not-prose mb-4">You can change the appearance of the alerts using the <code>variant</code> prop. Available variants include <code>card</code> (default value of variant), <code>borderTop</code>, <code>borderBottom</code>, and <code>borderStart</code>.</p>
    <Example>
      <svelte:fragment slot="example">
        <Alert variant="card">I'm default alert variant!</Alert>
        <Alert variant="borderTop">I'm "top bordered" alert variant!</Alert>
        <Alert variant="borderBottom">I'm "bottom bordered" alert variant!</Alert>
        <Alert variant="borderStart">I'm "start bordered" alert variant!</Alert>
      </svelte:fragment>
<div slot="code">

```html
<Alert variant="card">I'm error alert!</Alert>
<Alert variant="borderTop">I'm info alert!</Alert>
<Alert variant="borderBottom">I'm success alert!</Alert>
<Alert variant="borderStart">I'm warning alert!</Alert>
```
</div>
    </Example>
  </Block>

  <Block title="Icon Customization">
    <p class="not-prose mb-4">By default, the Alert will display an icon based on its type. However, you can customize the icon to suit your needs. To do this, use the <code>icon</code> slot to provide your custom SVG or other icon elements.</p>
    <p class="not-prose mb-4">Here's an example of how to customize the icon in an alert:</p>
    <Example>
      <svelte:fragment slot="example">
        <Alert type="success">
          <Svg slot="icon">
            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
          </Svg>
          Great job!
        </Alert>
      </svelte:fragment>
<div slot="code">

```html
<Alert>
  <Svg slot="icon">
    ....
  </Svg>
  Great job!
</Alert>
```
</div>
    </Example>
  </Block>

  <Block title="Disable Dismiss Button">
    <p class="not-prose mb-4">By default, alerts come with a dismiss button that allows users to close the alert. If you want an alert to be non-dismissible, you can disable the dismiss button by setting the <code>dismissible</code> prop to <code>false</code>.</p>
    <p class="not-prose mb-4">Here's an example of how to create a non-dismissible alert:</p>
    <Example>
      <svelte:fragment slot="example">
        <Alert dismissible={false}>I'm non-dismissible alert!</Alert>
      </svelte:fragment>
<div slot="code">

```html
<Alert dismissible={false}>I'm non-dismissible alert!</Alert>
```
</div>
    </Example>
  </Block>

  <Block title="Props">
    <DataTable data={data.component.props} hideText={true} />
  </Block>
  <Block title="Slots">
    <DataTable data={data.component.slots} type="slots"/>
  </Block>

  <svelte:fragment slot="sidebar">
    <a href="#example">Example</a>
    <a href={processID("Light theme")}>Light theme</a>
    <a href={processID("Alert variant")}>Alert variant</a>
    <a href={processID("Icon Customization")}>Icon Customization</a>
    <a href={processID("Disable Dismiss Button")}>Disable Dismiss Button</a>
    <a href="#props">Props</a>
    <a href="#slots">Slots</a>
  </svelte:fragment>
</DocContainer>