---
title: theui-svelte - Colors
component_title: Colors
description: Customize your Svelte app's appearance with TheUI-Svelte's Colors and Branding guide. Learn how to apply your brand colors effortlessly.
---

<script>
  import DocContainer from "$lib/ui/doc/Container.svelte"
  import Head from "$lib/ui/doc/Head.svelte"
  import Block from "$lib/ui/doc/Block.svelte"
  import Code from "$lib/ui/doc/Code.svelte"
  import { Alert, Table, TBody, TR, TD, THead } from "theui-svelte"
</script>

<DocContainer setupLink={false}>
  <Head title="Colors and Branding" text="One of the main features of TheUI Components library is the customizable color options that allow you to maintain brand identity and ensure consistent theming efficiently."/>
  <Block>
    <p class="not-prose">TheUI-svelte, developed with TailwindCSS, is a powerful tool capable of generating almost any CSS style and unlimited colors for your design. But do you really need unlimited colors for your design?</p>
    <p class="not-prose">Having many color options can lead to inconsistency and randomness in your design. To address this issue, the "TheUI-svelte" component library introduces ten custom color options that merge seamlessly with other colors provided by TailwindCSS. You can customize your theme with a single line by changing the value of CSS variables for these custom colors.</p>
  </Block>
  <Block title="TheUI Colors & Default Values" id="colorsAndValues">
    <p class="not-prose">The "TheUI-svelte" component library provides the following CSS variables and values, all prefixed with <code> --ui</code> to avoid conflicts with other variables:</p>
<Code title="CSS variables">

```css
@layer base{
  :root {
    /* Brand colors */
    --ui-brand                    : 80 70 230;    /* #5046E6 */
    --ui-brand-active             : 67 56 202;    /* #4338CA */
    --ui-brand-secondary          : 253 230 138;  /* #FDE68A */
    --ui-brand-secondary-active   : 252 211 77;   /* #FCD34D */

    /* Text colors */
    --ui-text-on-brand            : 255 255 255;  /* #FFFFFF */
    --ui-text-on-brand-secondary  : 8 8 24;       /* #080818 */
    --ui-text-default             : 8 8 24;       /* #080818 */

    /* Background colors */
    --ui-bg-primary               : 255 255 255;  /* #FFFFFF */
    --ui-bg-secondary             : 243 244 246;  /* #F3F4F6 */
    --ui-bg-tertiary              : 229 231 235;  /* #E5E7EB */
  }

  /* To change any color for dark mode, change the color below */
  :root.dark {
    /* Text color on dark mode */
    --ui-text-default             : 229 231 235;  /* #E5E7EB */

    /* Background colors on dark mode */
    --ui-bg-primary               : 8 8 24;       /* #080818 */
    --ui-bg-secondary             : 22 22 38;     /* #161626 */
    --ui-bg-tertiary              : 32 32 48;     /* #202030 */
  }
}
```
</Code>

  <Alert class="mb-0" type="info" variant="borderStart" icon={false} round = "none" dismissible={false}>Brand colors are available everywhere. Text colors are not available for background and vice versa.</Alert>
  </Block>
  <Block title="Use of Custom Colors" id="useColors">
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
          <TD><span class="not-prose whitespace-nowrap"><code>.[...]-brand</code></span></TD>
          <TD>Brand color for the component. For example, use the <span class="not-prose"><code>.bg-brand</code></span> class to apply brand color on the background, <span class="not-prose"><code>.text-brand</code></span> for the foreground, etc.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.[...]-brand-active</code></span></TD>
          <TD>Slightly deeper or lighter version of the brand color. Use it to express any state like active or hover of an element. For example, use the <span class="not-prose"><code>.bg-brand-active</code></span> class to apply brand color on the background, <span class="not-prose"><code>.text-brand-active</code></span> for the foreground, etc.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.[...]-brand-secondary</code></span></TD>
          <TD>Secondary brand color for the components. For example, use <span class="not-prose"><code>.bg-brand-secondary</code></span> class to apply brand color on the background, <span class="not-prose"><code>.text-brand-secondary</code> for foreground</span>, etc.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.[...]-brand-secondary-active</code></span></TD>
          <TD>Same as the <span class="not-prose whitespace-nowrap"><code>.[...]-brand-active</code></span>, but it is for secondary brand color.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.text-on-brand</code></span></TD>
          <TD>Foreground color for the background color <span class="not-prose"><code>.bg-brand</code></span>.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.text-on-brand-secondary</code></span></TD>
          <TD>Foreground color for the background color <span class="not-prose"><code>.bg-brand-secondary</code></span>.</TD>
        </TR>
        <TR>
          <TD><span class="not-prose whitespace-nowrap"><code>.text-default</code></span></TD>
          <TD>Default text/foreground color for the component library.</TD>
        </TR>
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
      </TBody>
    </Table>
  </Block>

  <Block title="Color Customization" id="customization">
    <p class="not-prose">To customize the colors, change the value of the corresponding CSS variable. For example, if your brand color is <code>rgb(255, 0, 0)</code> and you want the default text color to be <code>rgb(0, 0, 0)</code>, update your <code>./src/app.css</code> or <code>./src/app.postcss</code> file (the file containing your TailwindCSS styles) as follows:.</p>
<Code title="Customize CSS variables">

```css
--ui-brand : 255 0 0;
--ui-text-default : 0 0 0;
```
</Code>
    <p class="not-prose">That's it! All components using the brand color and the default text color will now reflect the new colors. To change other colors, follow the same process.</p>
  </Block>
  <svelte:fragment slot="sidebar">
    <a href="#colorsAndValues">Colors & Default Values</a>
    <a href="#useColors">Use custom colors</a>
    <a href="#customization">Color Customization</a>
  </svelte:fragment>
</DocContainer>
