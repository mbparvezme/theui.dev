---
title: theui-svelte - Type definition
component_title: Type definition
description: Understand the various component types in TheUI-Svelte. Learn how to use them effectively to build a versatile and robust Svelte application.
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte";
  import Head from "$lib/ui/doc/Head.svelte";
  import Block from "$lib/ui/doc/Block.svelte";
  import Code from "$lib/ui/doc/Code.svelte";
  import ComingSoon from "$lib/ui/ComingSoon.svelte";

  export let data: PageData;
</script>

<DocContainer setupLink={false}>
  <Head title="Types" text="This components library utilizing Typescript to define the types of the configurations of the components." edit_url={data.edit_url}/>
  <Block title="Common Types">
<Code title="Common type definition">

```ts
// Animation speed
export type ANIMATE_SPEED = undefined | false | "slower" | "slow" | "normal" | "fast" | "faster";
// Rounded corner
export type ROUNDED = "sm" | "md" | "lg" | "xl" | "full" | "none" | undefined;
// Shadow size
export type SHADOW = "sm" | "md" | "lg" | "xl" | "2xl" | "inner" | "none" | undefined;
```
</Code>
  </Block>
  <!-- <Block title="SEO Types">
<Code title="Common type definition"> -->

<!-- ```ts
export type SEO = {
    siteName: string; // Also available via .env
    slogan?: string;
    description: string;
    keywords?: string;
    logoPath?: string; // Also available via .env
    imgPath?: string;
    siteLang?: string; // Also available via .env
    businessSchema?: string;
    siteSchema?: string;
    pageSchema?: string;
    pageType?: string;
    video?: string;
    gtmCode?: string; // Also available via .env
    fbAppID?: string; // Also available via .env
    twitterID?: string; // Also available via .env
    twitterCreatorID?: string; // Also available via .env
    twitterCardType?: string;
};
```
</Code>
  </Block> -->
  <Block title="Dropdown">
<Code title="Type definition for 'Dropdown'">

```ts
// Dropdown configuration type
export type DROPDOWN_ITEM_CONFIG = {
    activeClass?: string;
    linkClass?: string;
    dividerClass?: string;
    headerClass?: string;
};

// Dropdown item data type
export type DROPDOWN_ITEM = {
    active?: boolean;
    url?: string;
    text?: string;
    type?: "link" | "divider" | "header";
    preload?: PRELOAD;
};
```
</Code>
  </Block>
  <Block title="Breadcrumb Data Types">
<Code title="Type definition for 'Breadcrumb'">

```ts
export type BREADCRUMB_DATA = Array<{
    text: string;
    url?: string;
}>;
```
</Code>
  </Block>
  <Block title="Notification">
<Code title="Type definition for 'Notification'">

```ts
// Notification configuration type
export type NOTIFY_CONFIG = {
    removeAfter?: number;
    removeOnClick?: boolean;
    rounded: ROUNDED;
    variant: "card" | "cardLight" | "borderTop" | "borderBottom" | "borderStart";
};

// Types of Notification
export type NOTIFICATION_TYPE = "error" | "info" | "success" | "warning";
```
</Code>
  </Block>
  <Block title="Table">
<Code title="Type definition for 'Table'">

```ts
// Table configuration type
export type TABLE_CONFIG = {
    animate: ANIMATE_SPEED;
    border: "x" | "y" | "both" | "none";
    borderColor: string;
    hover: boolean | string;
    space: "compact" | "default" | "comfortable" | string;
    stripe: boolean | string;
    containerClass: string;
    trClass: string;
};

// Table Row data type
export type TABLE_ROW = object | (object | string | string[])[] | undefined;
```
</Code>
  </Block>
  <Block title="Tab">
<Code title="Type definition for 'Tab'">

```ts
// Tab configuration type
export type TAB_CONFIG = {
    activeTabClasses?: string;
    animate?: ANIMATE_SPEED;
    border: boolean;
    inactiveTabClasses?: string;
    tabPanelClasses?: string;
    variant: 'tabs' | 'pills';
};
```
</Code>
  </Block>
  <Block title="Form Input Data type">
<Code>

```ts

```
</Code>
  </Block>
</DocContainer>