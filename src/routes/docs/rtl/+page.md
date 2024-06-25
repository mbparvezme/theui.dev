---
title: theui-svelte RTL guide
dir: docs
description: Implement right-to-left (RTL) support in your Svelte app with TheUI-Svelte's comprehensive RTL guide. Achieve seamless bidirectional text compatibility.
---

<script lang="ts">
  import type { PageData } from "./$types";
  import DocContainer from "$lib/ui/doc/Container.svelte"
  import Head from "$lib/ui/doc/Head.svelte"
  import Block from "$lib/ui/doc/Block.svelte"
  import ComingSoon from "$lib/ui/ComingSoon.svelte"

  export let data: PageData;
</script>

<DocContainer setupLink={false}>
  <Head title="RTL" edit_url={data.edit_url}/>
  <Block>
    <ComingSoon />
  </Block>
</DocContainer>