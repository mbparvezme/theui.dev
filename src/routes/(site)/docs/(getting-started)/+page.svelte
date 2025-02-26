<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/introduction.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Introduction" />

<Page components={data.components} edit_url={data.editURL} />