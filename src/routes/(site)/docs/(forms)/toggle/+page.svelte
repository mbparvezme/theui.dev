<script lang="ts">
  import type { PageData } from "./$types";
  import Page from "$lib/pages/toggle.svx";

  let { data }: { data: PageData|any } = $props();
  import SEO from "$lib/SEO.svelte"
</script>

<SEO title="Toggle" />

<Page component={data.component} />