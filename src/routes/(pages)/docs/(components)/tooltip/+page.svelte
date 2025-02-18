<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/tooltip.svx";
  import { onMount } from "svelte";

  let { data }: { data: PageData|any } = $props();

  onMount(() => {
    const getEBound = (el: HTMLElement): DOMRect => el.getBoundingClientRect();
    console.log(getEBound.top);
  });
</script>

<Page component={data.component} edit_url={data.editURL} />