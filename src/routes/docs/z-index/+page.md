---
title: theui-svelte z-index guide
dir: docs
description: Manage stacking contexts in your Svelte application with TheUI-Svelte's Z-index guide. Ensure proper layering and visibility of components.
---

<script>
  import DocContainer from "$lib/ui/doc/Container.svelte"
  import Head from "$lib/ui/doc/Head.svelte"
  import Block from "$lib/ui/doc/Block.svelte"
  import { Alert, Table, TBody, TR, TD, THead } from "theui-svelte"
</script>

<DocContainer setupLink={false}>
  <Head title="Z-index" text="In this library, several components utilize z-index. This document will let you know the order of the z-index in components."/>
  <Block>
    <p class="mt-0">In this library, several components utilize z-index values. This document outlines the z-index order of components.</p>
    <p class="mt-0">The z-index property helps manage the overlay and layout of elements relative to one another, controlling their arrangement along the z-axis. Customizing these values is not recommended, as it may disrupt the intended layout.</p>
    <Table>
      <THead>
        <TR>
          <TD>Component</TD>
          <TD>Class</TD>
          <TD>Value (z-index)</TD>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD>Dropdown</TD>
          <TD><span class="not-prose whitespace-nowrap"><code>.dropdown .backdrop</code></span></TD>
          <TD>10</TD>
        </TR>
        <TR>
          <TD>Dropdown</TD>
          <TD><span class="not-prose whitespace-nowrap"><code>.dropdown-content</code></span></TD>
          <TD>11</TD>
        </TR>
        <TR>
          <TD>Sticky positioned</TD>
          <TD><span class="not-prose whitespace-nowrap"><code>.sticky, [class$=:sticky]</code></span></TD>
          <TD>20</TD>
        </TR>
        <TR>
          <TD>Fixed positioned</TD>
          <TD><span class="not-prose whitespace-nowrap"><code>.fixed, [class$=:fixed]</code></span></TD>
          <TD>30</TD>
        </TR>
        <TR>
          <TD>Offcanvas</TD>
          <TD><span class="not-prose whitespace-nowrap"><code>.offcanvas</code></span></TD>
          <TD>40</TD>
        </TR>
        <TR>
          <TD>Modal</TD>
          <TD><span class="not-prose whitespace-nowrap"><code>.modal</code></span></TD>
          <TD>50</TD>
        </TR>
        <TR>
          <TD>Popup</TD>
          <TD><span class="not-prose whitespace-nowrap"><code>.popup</code></span></TD>
          <TD>60</TD>
        </TR>
        <TR>
          <TD>Tooltip</TD>
          <TD><span class="not-prose whitespace-nowrap"><code>.tooltip</code></span></TD>
          <TD>70</TD>
        </TR>
        <TR>
          <TD>Notifications</TD>
          <TD><span class="not-prose whitespace-nowrap"><code>.notifications</code></span></TD>
          <TD>80</TD>
        </TR>
      </TBody>
    </Table>
  </Block>
  <Block>
  <h5>Important Notes</h5>
    <ul>
      <li>The z-index values are predefined to ensure proper stacking and functionality of the components.</li>
      <li>Modifying these values is discouraged as it may cause layout issues, particularly with component overlays.</li>
    </ul>
  </Block>
</DocContainer>