---
title: theui-svelte - Accordion
component_title: Accordion
description: ====
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte";
  import Head from "$lib/ui/doc/Head.svelte";
  import Block from "$lib/ui/doc/Block.svelte";
  import Code from "$lib/ui/doc/Code.svelte";
  import DataTable from "$lib/ui/doc/DataTable.svelte";
  import Example from "$lib/ui/doc/Example.svelte";
  import { Accordion, AccordionItem } from "theui-svelte";
  import { processID } from "$lib";

  export let data: PageData;
</script>

<DocContainer>
  <Head title="Accordion" text="The Accordion component is used to show or hide information based on the collapse and expand state of its child elements. It has two variants with configurations provided in the Configuration section." />
  <Block title="Setup">
    <p class="not-prose mb-4">To use the Accordion component in your project, import the required components:</p>
<Code title="Import">

```html
<script>
  import { Accordion, AccordionItem } from "theui-svelte"
</script>
```
</Code>
  </Block>

  <Block title="Usage">
    <Example title="Basic Example">
      <p class="not-prose mb-2">You can create an accordion item with a title and content using the following example:</p>
      <svelte:fragment slot="example">
        <AccordionItem title="Human Psychology Fact: 1" content="<b>Cognitive dissonance</b> refers to the discomfort we feel when holding conflicting beliefs or attitudes. For instance, a person who smokes but knows it's harmful might experience tension. To alleviate this discomfort, they may justify their behavior by downplaying the risks or highlighting benefits, like stress relief. This psychological mechanism illustrates how we strive for internal consistency, shaping our perceptions and decisions to align with our beliefs and actions." />
      </svelte:fragment>
<div slot="code">

```html
<AccordionItem title="Human Psychology Fact: 1" content="<b>Cognitive dissonance</b> refers to.." />
```
</div>
    </Example>
    <Example title="Slot Example">
      <p class="not-prose mb-2"><b>Alternatively</b>, You can create an accordion item with a <code>title</code> and <code>content</code> <b>slots</b> using the following example:</p>
      <svelte:fragment slot="example">
        <AccordionItem>
          <h5 slot="title">Human Psychology Fact: 1</h5>
          <div slot="content"><b>Cognitive dissonance</b> refers to the discomfort we feel when holding conflicting beliefs or attitudes. For instance, a person who smokes but knows it's harmful might experience tension. To alleviate this discomfort, they may justify their behavior by downplaying the risks or highlighting benefits, like stress relief. This psychological mechanism illustrates how we strive for internal consistency, shaping our perceptions and decisions to align with our beliefs and actions.</div>
        </AccordionItem>
      </svelte:fragment>
<div slot="code">

```html
<AccordionItem>
  <h5 slot="title">Human Psychology Fact: 1</h5>
  <div slot="content"><b>Cognitive dissonance</b> refers to..</div>
</AccordionItem>
```
</div>
    </Example>
  </Block>

  <Block title="Group Accordion">
    <Example>
      <p class="not-prose mb-2">To create a group of accordion items, wrap multiple <code>AccordionItem</code> components within an <code>Accordion</code> component:</p>
      <svelte:fragment slot="example">
        <Accordion>
          <AccordionItem title="Accordion Header 1" content="<b>Cognitive dissonance</b> refers to the discomfort we feel when holding conflicting beliefs or attitudes. For instance, a person who smokes but knows it's harmful might experience tension. To alleviate this discomfort, they may justify their behavior by downplaying the risks or highlighting benefits, like stress relief. This psychological mechanism illustrates how we strive for internal consistency, shaping our perceptions and decisions to align with our beliefs and actions." />
          <AccordionItem title="Accordion Header 2" content="The <b>placebo effect</b> demonstrates how beliefs can influence physical health. Studies show that patients receiving a sugar pill, believing it's real medication, often experience actual improvements in their conditions." />
        </Accordion>
      </svelte:fragment>
<div slot="code">

```html
<Accordion>
  <AccordionItem title="Human Psychology Fact: 1" content="<b>Cognitive dissonance</b> refers to.." />
  <AccordionItem title="Human Psychology Fact: 2" content="The <b>placebo effect</b> demonstrates.." />
</Accordion>
```
</div>
    </Example>
  </Block>

  <Block title="Flash Accordion">
    <Example>
      <p class="not-prose mb-2">For a flush-style accordion, add the <code>flush</code> attribute to the <code>AccordionItem</code> components:</p>
      <svelte:fragment slot="example">
        <Accordion>
          <AccordionItem isFlush={true} title="Human Psychology Fact: 1" content="<b>Cognitive dissonance</b> refers to the discomfort we feel when holding conflicting beliefs or attitudes. For instance, a person who smokes but knows it's harmful might experience tension. To alleviate this discomfort, they may justify their behavior by downplaying the risks or highlighting benefits, like stress relief. This psychological mechanism illustrates how we strive for internal consistency, shaping our perceptions and decisions to align with our beliefs and actions." />
          <AccordionItem isFlush={true} title="Human Psychology Fact: 2" content="The <b>placebo effect</b> demonstrates how beliefs can influence physical health. Studies show that patients receiving a sugar pill, believing it's real medication, often experience actual improvements in their conditions." />
        </Accordion>
      </svelte:fragment>
<div slot="code">

```html
<Accordion>
  <AccordionItem flush ... />
  <AccordionItem flush ... />
</Accordion>
```
</div>
    </Example>
  </Block>

  <Block title="Accordion Size">
    <p class="not-prose mb-4">The <code>Accordion</code> and <code>AccordionItem</code> component provides a <code>size</code> prop to control the size of the accordion items. The <code>size</code> prop can take one of the following values: <code>'compact'</code>, <code>'default'</code>, or <code>'large'</code>.</p>
    <p class="not-prose mb-4">When the <code>size</code> prop is set on the <code>Accordion</code> component, all <code>AccordionItem</code> components within it will inherit this size. This ensures a consistent appearance for all items in the accordion.</p>
    <Example>
      <svelte:fragment slot="example">
        <Accordion size="compact">
          <AccordionItem title="Human Psychology Fact: 1" content="<b>Cognitive dissonance</b> refers to the discomfort we feel when holding conflicting beliefs or attitudes. For instance, a person who smokes but knows it's harmful might experience tension. To alleviate this discomfort, they may justify their behavior by downplaying the risks or highlighting benefits, like stress relief. This psychological mechanism illustrates how we strive for internal consistency, shaping our perceptions and decisions to align with our beliefs and actions." />
          <AccordionItem title="Human Psychology Fact: 2" content="The <b>placebo effect</b> demonstrates how beliefs can influence physical health. Studies show that patients receiving a sugar pill, believing it's real medication, often experience actual improvements in their conditions." />
        </Accordion>
      </svelte:fragment>
<div slot="code">

```html
<Accordion size="compact">
  <AccordionItem ... />
  <AccordionItem ... />
</Accordion>
```
</div>
    </Example>
    <p class="not-prose mb-4">In the example above, both <code>AccordionItem</code> components will have the <code>compact</code> size.</p>
    <p class="not-prose mb-4">You can also set the <code>size</code> prop individually on each <code>AccordionItem</code> component. The <code>size</code> prop on an individual <code>AccordionItem</code> will override the size specified on the parent <code>Accordion</code>.</p>
    <Example>
    <svelte:fragment slot="example">
      <Accordion size="compact">
        <AccordionItem size="large" title="Human Psychology Fact: 1" content="<b>Cognitive dissonance</b> refers to the discomfort we feel when holding conflicting beliefs or attitudes. For instance, a person who smokes but knows it's harmful might experience tension. To alleviate this discomfort, they may justify their behavior by downplaying the risks or highlighting benefits, like stress relief. This psychological mechanism illustrates how we strive for internal consistency, shaping our perceptions and decisions to align with our beliefs and actions." />
        <AccordionItem title="Human Psychology Fact: 2" content="The <b>placebo effect</b> demonstrates how beliefs can influence physical health. Studies show that patients receiving a sugar pill, believing it's real medication, often experience actual improvements in their conditions." />
      </Accordion>
    </svelte:fragment>
<div slot="code">

```html
<Accordion size="compact">
  <AccordionItem size="large" ... />
  <AccordionItem ... />
</Accordion>
```
</div>
    </Example>
    <p class="not-prose mb-4">In this example, the first <code>AccordionItem</code> will have a <code>large</code> size, while the second <code>AccordionItem</code> will inherit the <code>compact</code> size from the parent <code>Accordion</code>.</p>
  </Block>

  <Block title="Accordion State">
    <p class="not-prose mb-4">To have an <code>AccordionItem</code> open by default, add the <code>open</code> attribute to the <code>AccordionItem</code> you want to keep open. This is a dynamic attribute, not a prop, and will take effect when added to the component.</p>
    <Example>
      <svelte:fragment slot="example">
        <Accordion>
          <AccordionItem title="Human Psychology Fact: 1" content="<b>Cognitive dissonance</b> refers to the discomfort we feel when holding conflicting beliefs or attitudes. For instance, a person who smokes but knows it's harmful might experience tension. To alleviate this discomfort, they may justify their behavior by downplaying the risks or highlighting benefits, like stress relief. This psychological mechanism illustrates how we strive for internal consistency, shaping our perceptions and decisions to align with our beliefs and actions." />
          <AccordionItem isOpen={true} title="Human Psychology Fact: 2" content="The <b>placebo effect</b> demonstrates how beliefs can influence physical health. Studies show that patients receiving a sugar pill, believing it's real medication, often experience actual improvements in their conditions." />
        </Accordion>
      </svelte:fragment>
<div slot="code">

```html
<Accordion>
  <AccordionItem ... />
  <AccordionItem open ... />
</Accordion>
```
</div>
    </Example>
  </Block>

  <Block title="Props">
    <DataTable data={data.component.groupProps} title="Accordion Props" mb=8 />
    <DataTable data={data.component.props} title="AccordionItem Props" mb=8 hideText={true} />
    <DataTable data={data.component.dynamicProps} type="slots" title="AccordionItem Dynamic Props" hideText={true} />
  </Block>
  <Block title="Slots">
    <DataTable data={data.component.slots} type="slots"/>
  </Block>

  <svelte:fragment slot="sidebar">
    <a href="#usage">Usage</a>
    <a href={processID("Group Accordion")}>Group</a>
    <a href={processID("Flash Accordion")}>Flush</a>
    <a href={processID("Accordion Size")}>Size</a>
    <a href={processID("Accordion State")}>State</a>
    <a href="#props">Props</a>
    <a href="#slots">Slots</a>
  </svelte:fragment>
</DocContainer>