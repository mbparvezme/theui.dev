<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/close.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Close Button" />

<Page component={data.component} />