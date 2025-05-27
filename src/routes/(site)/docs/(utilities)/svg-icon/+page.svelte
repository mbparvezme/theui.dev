<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/svg-icon.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="SVG Component" />

<Page component={data.component} />