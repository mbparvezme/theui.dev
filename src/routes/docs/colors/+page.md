---
title: theui-svelte - Colors
component_title: Colors
description: Customize your Svelte app's appearance with TheUI-Svelte's Colors and Branding guide. Learn how to apply your brand colors effortlessly.
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte"
  import Head from "$lib/ui/doc/Head.svelte"
  import Block from "$lib/ui/doc/Block.svelte"
  import Code from "$lib/ui/doc/Code.svelte"
  import { Alert, Table, TBody, TR, TD, THead } from "theui-svelte"
  export let data: PageData;
</script>

<DocContainer setupLink={false}>
  <Head title="Colors and Branding" text="One of the main features of TheUI Components library is its customizable color options, allowing you to maintain brand identity and ensure consistent theming efficiently." edit_url={data.edit_url}/>
  <Block>
    <p class="not-prose">The component library, built with TailwindCSS, offers two custom color options for seamless integration and easy theme customization through CSS variables.</p>
    <p class="not-prose">TheUI Components library provides extensive color customization to maintain brand identity and consistent theming. With the component library, you can customize colors with or without shades, giving you flexibility and control over your design.</p>
    <p class="not-prose">There are two ways to customize/generate colors in the component library:</p>
    <ol class="my-0 list-decimal">
      <li class="my-0"><a href="#generate-color-with-shades" class="underline decoration-dashed underline-offset-4">Generate Color with Shades</a></li>
      <li class="my-0"><a href="#generate-color-without-shades">Generate Color without Shades</a></li>
    </ol>
  </Block>

  <Block title="Generate Color With Shades">
    <p class="not-prose">Customizing colors with shades involves generating a cohesive color palette with varying levels of lightness and darkness, similar to the default TailwindCSS color system. You can assign a custom name to your color, generating the following shades: X-50, X-100, X-200, X-300, X-400, X-500, X-600, X-700, X-800, X-900, X-950. This allows for a flexible and comprehensive set of colors for different components and states in your design.</p>
    <h3 class="mt-4 mb-0" id="available-color-shades">Available Color Shades</h3>
    <p class="not-prose">By default, the <b>theui-svelte</b> includes the following eight (8) shaded colors:</p>
    <Table class="my-0">
      <THead>
        <TR>
          <TD>Name</TD>
          <TD>Description</TD>
          <TD>Value</TD>
          <TD>Availability</TD>
          <TD>Example</TD>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>brand</code></span></TD>
          <TD>Main brand color</TD>
          <TD>#536DFE</TD>
          <TD>Everywhere</TD>
          <TD><span class="not-prose"><code>.bg-brand-500</code></span>, <span class="not-prose"><code>.text-brand-300</code></span>, <span class="not-prose"><code>.border-brand-200</code></span> etc.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>brand-secondary</code></span></TD>
          <TD>Secondary brand color</TD>
          <TD>#FF5722</TD>
          <TD>Everywhere</TD>
          <TD><span class="not-prose"><code>.bg-brand-secondary-500</code></span>, <span class="not-prose"><code>.text-brand-secondary-300</code></span>, <span class="not-prose"><code>.border-brand-secondary-200</code></span> etc.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>on-brand</code></span></TD>
          <TD>Foreground (Text) color to place on brand</TD>
          <TD>#FAFDFF</TD>
          <TD>Only for text</TD>
          <TD><span class="not-prose"><code>.text-on-brand-500</code></span>, <span class="not-prose"><code>.text-on-brand-300</code></span> etc.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>on-brand-secondary</code></span></TD>
          <TD>Foreground (Text) color to place on secondary brand color</TD>
          <TD>#FFFDF9</TD>
          <TD>Only for text</TD>
          <TD><span class="not-prose"><code>.text-on-brand-secondary-500</code></span>, <span class="not-prose"><code>.text-on-brand-secondary-300</code></span> etc.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>error</code></span></TD>
          <TD>Color to represent errors</TD>
          <TD>#E53935</TD>
          <TD>Everywhere</TD>
          <TD><span class="not-prose"><code>.bg-error-500</code></span>, <span class="not-prose"><code>.text-error-50</code></span>, <span class="not-prose"><code>.border-error-200</code></span> etc.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>info</code></span></TD>
          <TD>Color to represent information</TD>
          <TD>#29B6F6</TD>
          <TD>Everywhere</TD>
          <TD><span class="not-prose"><code>.bg-info-500</code></span>, <span class="not-prose"><code>.text-info-50</code></span>, <span class="not-prose"><code>.border-info-200</code></span> etc.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>success</code></span></TD>
          <TD>Color to represent success</TD>
          <TD>#00C853</TD>
          <TD>Everywhere</TD>
          <TD><span class="not-prose"><code>.bg-success-500</code></span>, <span class="not-prose"><code>.text-success-50</code></span>, <span class="not-prose"><code>.border-success-200</code></span> etc.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>warning</code></span></TD>
          <TD>Color to represent warning</TD>
          <TD>#FFC107</TD>
          <TD>Everywhere</TD>
          <TD><span class="not-prose"><code>.bg-warning-500</code></span>, <span class="not-prose"><code>.text-warning-50</code></span>, <span class="not-prose"><code>.border-warning-200</code></span> etc.</TD>
        </TR>
      </TBody>
    </Table>
    <h3 class="mt-4 mb-0" id="new-shaded-colors">Adding New Shaded Colors</h3>
    <p class="not-prose">To add a new color with shades, use the <code>twShades</code> function in your TailwindCSS configuration file. For example, to generate new shades for the <code>brand-accent</code> color:</p>
<Code title="tailwind.config.cjs">

```js
/** @type {import('tailwindcss').Config} */
const twShades = require('tw-color-shades');

module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                "brand-accent": twShades('#FF5722'), // This generates shades for the "brand-accent" color
            }
        }
    },
    plugins: []
}
```
</Code>
<Code title="HTML Example">

```html
<div class="bg-brand-accent-700 text-brand-accent-100 ...">
  ...
</div>

```
</Code>
    <h3 class="mt-4 mb-0" id="change-update-a-color">Change/Update a Color</h3>
    <p class="not-prose">To change a default shaded color, update your TailwindCSS configuration. For example, to update the <code>brand</code> color to <code>#FF0000</code>:</p>
<Code title="tailwind.config.cjs">

```js
/** @type {import('tailwindcss').Config} */
const twShades = require('tw-color-shades');

module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                brand: twShades('#FF0000'), // Changing brand color
            }
        }
    },
    plugins: []
}
```
</Code>
    <h3 class="mt-4 mb-0" id="removing-a-color">Removing a Color</h3>
    <p class="not-prose">To remove a color from your palette, set its value to <code>null</code> in your TailwindCSS configuration. For example, to remove the <code>brand-secondary</code> color:</p>
<Code title="tailwind.config.cjs">

```js
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                "brand-secondary": null // Removing brand-secondary color
            }
        }
    },
    plugins: []
}
```
</Code>
    <p class="not-prose">This will remove the <code>brand-secondary</code> color with all the classes from from the component library.</p>

  </Block>

  <Block title="Generate Color Without Shades">
    <p class="not-prose">If you prefer not to use shaded colors, you can customize individual CSS variables directly. This method allows you to set specific colors for different UI elements.</p>
    <p class="not-prose">The "theui-svelte" component library provides the following CSS variables, all prefixed with --ui to avoid conflicts with other variables::</p>
<Code title="CSS variables">

```css
:root {
  --ui-bg-primary: 250 250 250; /* #FAFAFA */
  --ui-bg-secondary: 238 238 238; /* #EEEEEE */
  --ui-bg-tertiary: 224 224 224; /* #E0E0E0 */
  --ui-bg-primary-alt: 10 10 20; /* #0A0A14 */
  --ui-bg-secondary-alt: 30 30 40; /* #1E1E28 */
  --ui-bg-tertiary-alt: 55 55 65; /* #373741 */

  --ui-text-default: 33 33 33; /* #212121 */
  --ui-text-alt: 189 189 189; /* #BDBDBD */
  --ui-text-muted: 117 117 117; /* #757575 */
}

/* To change any color for dark mode, change the color below */
:root.dark {
  /* Text color on dark mode */
  --ui-bg-primary: 10 10 20; /* #0A0A14 */
  --ui-bg-secondary: 30 30 40; /* #1E1E28 */
  --ui-bg-tertiary: 55 55 65; /* #373741 */
  --ui-bg-primary-alt: 250 250 250; /* #FAFAFA */
  --ui-bg-secondary-alt: 238 238 238; /* #EEEEEE */
  --ui-bg-tertiary-alt: 224 224 224; /* #E0E0E0 */

  --ui-text-default: 245 245 245; /* #F5F5F5 */
  --ui-text-alt: 75 75 75; /* #4B4B4B */
  --ui-text-muted: 175 175 175; /* #AFAFAF */
}
```
</Code>

  <Alert class="mb-0" type="info" variant="borderStart" icon={false} round = "none" dismissible={false}>The colors prefixed with "--ui-text" are only available for text.<br>The colors prefixed with "--ui-bg" are only available for background.</Alert>
  </Block>
  <Block title="Available CSS variables and Their Colors">
    <p class="not-prose">You can use custom classes to apply these colors in your design. The Components library includes the following classes:</p>
    <Table class="my-0">
      <THead>
        <TR>
          <TD>Class</TD>
          <TD>Description</TD>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.bg-primary</code></span></TD>
          <TD>Default/primary background color.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.bg-secondary</code></span></TD>
          <TD>Secondary background color.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.bg-tertiary</code></span></TD>
          <TD>Tertiary background color.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.bg-primary-alt</code></span></TD>
          <TD>Default/primary background color.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.bg-secondary-alt</code></span></TD>
          <TD>Secondary background color.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.bg-tertiary-alt</code></span></TD>
          <TD>Tertiary background color.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.text-default</code></span></TD>
          <TD>Default text/foreground color for the component library.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.text-alt</code></span></TD>
          <TD>Default text/foreground color for the component library.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.text-muted</code></span></TD>
          <TD>Default text/foreground color for the component library.</TD>
        </TR>
      </TBody>
    </Table>
  </Block>

  <Block title="CSS Variables Customization">
    <p class="not-prose">
    To customize colors, update the corresponding CSS variable. For example, to change the bg-primary color for light and dark modes:</p>
<Code title="./src/app.postcss">

```css
:root {
  --ui-bg-primary : 240 252 252;
  --ui-text-default : 15, 15, 15;
}
:root.dark {
  --ui-bg-primary : 15, 8, 8;
  --ui-text-default : 250, 240, 245;
}
```
</Code>
    <p class="not-prose">All components using the <code>.bg-primary</code> and <code>.text-default</code> classes will now reflect the new colors. Follow the same process to change other colors.</p>
  </Block>
  <svelte:fragment slot="sidebar">
    <a href="#generate-color-with-shades">Generate Color With Shades</a>
    <a href="#available-color-shades" class="pl-4">Available Color Shades</a>
    <a href="#new-shaded-colors" class="pl-4">Adding New Shaded Colors</a>
    <a href="#change-update-a-color" class="pl-4">Change/Update a Color</a>
    <a href="#removing-a-color" class="pl-4">Removing A Colors</a>
    <a href="#generate-color-without-shades">Generate Color Without Shades</a>
    <a href="#available-css-variables-and-their-colors" class="pl-4">Available CSS variables</a>
    <a href="#css-variables-customization" class="pl-4">CSS Variables Customization</a>
  </svelte:fragment>
</DocContainer>
